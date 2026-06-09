import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!checked) {
      toast.error("Please agree to the Terms and Conditions");
      return;
    }

    try {
      const res = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Registration failed");
        return;
      }

      toast.success("Account created! Check OTP");

      localStorage.setItem("otpEmail", email);

      navigate("/auth/verify-otp");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      {/* REGISTER CARD */}
      <div className="bg-white p-8 md:p-12 xl:p-16 rounded-3xl w-full max-w-3xl min-h-[330px] shadow-[0_25px_70px_rgba(34,197,94,0.25)]">
        <h2 className="text-[#36B37E] text-4xl font-semibold mb-10">
          Register
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>

            <div className="flex items-center border-3 border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="flex-1 min-w-0 outline-none bg-transparent"
              />

              <img
                src={assets.user}
                alt="name"
                className="w-5 h-5 ml-3 flex-shrink-0"
              />
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>

            <div className="flex items-center border-3 border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 min-w-0 outline-none bg-transparent"
              />

              <img
                src={assets.envelope}
                alt="email"
                className="w-5 h-5 ml-3 flex-shrink-0"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>

            <div className="flex items-center border-3 border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="flex-1 min-w-0 outline-none bg-transparent"
              />

              <img
                src={assets.lock}
                alt="lock"
                className="w-5 h-5 ml-3 flex-shrink-0"
              />
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div
              onClick={() => setChecked(!checked)}
              className={`mt-1 w-5 h-5 border rounded cursor-pointer flex items-center justify-center transition
              ${checked ? "bg-green-500 border-green-500" : "border-gray-300"}`}
            >
              <div
                className={`w-[6px] h-[10px] border-r-3 border-b-3 border-white rotate-45 transition-opacity mb-1
                ${checked ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            <p className="text-sm text-gray-400 mt-1.5">
              I agree to all the{" "}
              <span className="text-green-500 font-medium cursor-pointer">
                Terms
              </span>
              ,{" "}
              <span className="text-green-500 font-medium cursor-pointer">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-green-500 font-medium cursor-pointer">
                Fees
              </span>
              .
            </p>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-600/70 mt-2 text-white w-full h-12 hover:bg-green-600 rounded-md font-semibold text-xl cursor-pointer"
          >
            Register
          </button>
        </form>
        <p className="text-left text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/auth" className="text-[#36B37E] hover:underline ml-3.5">
            Log in.
          </Link>
        </p>
      </div>
    </>
  );
};
