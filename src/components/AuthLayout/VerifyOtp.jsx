import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useRef, useState } from "react";
import { EmailSuccess } from "./EmailSuccess";

export const VerifyOtp = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);
  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleConfirmOtp = (e) => {
    e.preventDefault()
    const code = otp.join("");

    if (code.length !== 6) {
      toast.error("Enter complete OTP");
      return;
    }

    toast.success("OTP Verified");
    setShowSuccess(true);
  };
  return (
    <>
      <div className="bg-white p-8 md:p-12 xl:p-16 rounded-3xl w-full max-w-3xl min-h-[330px] shadow-[0_25px_70px_rgba(34,197,94,0.25)]">
        <h2 className="text-[#36B37E] text-4xl font-semibold mb-10">
          Email Verification
        </h2>
        <form className="space-y-5">
          <p className="text-left text-gray-600">
            A 6-digit code has been sent to your email.
            <Link
              to="/auth/register"
              className="text-[#36B37E] hover:underline ml-2"
            >
              Change
            </Link>
          </p>
          <div className="flex justify-between gap-3">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                onKeyDown={(e) => handleOtpKeyDown(e, index)}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 border-gray-300 rounded-lg text-center text-xl focus:ring-2 focus:ring-green-500 outline-none border-2"
              />
            ))}
          </div>
          <p className="text-left text-[#36B37E]">0:45 remaining</p>
          <button
            type="submit"
            onClick={handleConfirmOtp}
            className="bg-green-600/70 mt-2 text-white w-full h-12 hover:bg-green-600 rounded-md font-semibold text-xl cursor-pointer"
          >
            Verify Email
          </button>
        </form>
        <p className="text-left text-gray-400 mt-6">
          Didn't receive the code?{" "}
          <Link
            className="text-[#36B37E] hover:underline ml-3.5"
          >
            Resend
          </Link>
        </p>
      </div>
      {showSuccess && <EmailSuccess /> }
    </>
  );
};
