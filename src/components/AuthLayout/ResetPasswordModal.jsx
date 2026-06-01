import { useRef, useState } from "react";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const ResetPasswordModal = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // STEP 1: EMAIL
  const handleReset = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email");
      return;
    }

    setStep(2);
    toast.success("Reset link sent (demo)");
  };

  // OTP HANDLERS
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

  const handleConfirmOtp = () => {
    const code = otp.join("");

    if (code.length !== 6) {
      toast.error("Enter complete OTP");
      return;
    }

    toast.success("OTP Verified");
    setStep(3);
  };

  // STEP 3: PASSWORD CHANGE
  const handleChangePassword = () => {
    if (!password || !confirmPassword) {
      toast.error("Please fill in both fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      setConfirmPassword("");
      setPassword("");
      return;
    }

    setStep(4);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white w-full max-w-[560px] min-h-[360px] rounded-3xl shadow-2xl p-10 relative">
        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-6 my-6">
            <h2 className="text-2xl font-semibold text-center text-green-500/90">
              Reset Password
            </h2>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">Email</label>

              <div className="flex items-center border border-gray-300 rounded-md px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 outline-none bg-transparent"
                />

                <img
                  src={assets.envelope}
                  alt="email"
                  className="w-5 h-5 ml-3 flex-shrink-0"
                />
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-green-600/80 w-full h-12 text-white hover:bg-green-600 rounded-md font-semibold text-lg cursor-pointer"
            >
              Reset Password
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-6 my-6">
            <h2 className="text-2xl font-semibold text-left text-green-500/90">
              Enter OTP
            </h2>

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
                  className="w-12 h-12 border border-gray-300 rounded-md text-center text-xl focus:ring-2 focus:ring-green-500 outline-none"
                />
              ))}
            </div>

            <p className="text-left text-gray-500">0:45 remaining</p>

            <button
              onClick={handleConfirmOtp}
              className="bg-green-600/80 w-full h-12 text-white hover:bg-green-600 rounded-md font-semibold text-lg cursor-pointer"
            >
              Confirm
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-6 my-6">
            <h2 className="text-2xl font-semibold text-left text-green-500/90">
              Enter New Password
            </h2>

            {/* PASSWORD */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                New Password
              </label>

              <div className="flex items-center border border-gray-300 rounded-md px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your new password"
                  className="flex-1 outline-none bg-transparent"
                />

                <img
                  src={assets.lock}
                  alt="password"
                  className="w-5 h-5 ml-3 flex-shrink-0"
                />
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Retype Password
              </label>

              <div className="flex items-center border border-gray-300 rounded-md px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Retype your new password"
                  className="flex-1 outline-none bg-transparent"
                />

                <img
                  src={assets.lock}
                  alt="confirm password"
                  className="w-5 h-5 ml-3 flex-shrink-0"
                />
              </div>
            </div>

            <button
              onClick={handleChangePassword}
              className="bg-green-600/80 w-full h-12 text-white hover:bg-green-600 rounded-md font-semibold text-lg cursor-pointer"
            >
              Change Password
            </button>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-6 my-10">
            {/* GIF CENTER */}
            <div className="flex justify-center">
              <img src={assets.success} alt="success" className="w-auto h-48" />
            </div>

            {/* TEXT LEFT */}
            <div className="text-center space-y-3">
              <h2 className="text-lg font-semibold text-black/80 ">
                Your password has been changed successfully!
              </h2>
            </div>

            {/* BUTTON LEFT */}
            <div className="text-left">
              <button
                onClick={onClose}
                className="bg-green-600/80 w-full h-12 text-white hover:bg-green-600 rounded-md font-semibold text-lg cursor-pointer mt-9"
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
