import { useState } from "react";
import { assets } from "../../assets/assets";
import { ResetPasswordModal } from "./ResetPasswordModal";
import { Link } from "react-router-dom";

export const Login = () => {
  const [showReset, setShowReset] = useState(false);

  return (
    <>
      {/* LOGIN CARD */}
      <div className="bg-white p-8 md:p-12 xl:p-16 rounded-3xl w-full max-w-3xl min-h-[330px] shadow-[0_25px_70px_rgba(34,197,94,0.25)]">
        <h2 className="text-[#36B37E] text-4xl font-semibold mb-10">Login</h2>
        <form className="space-y-5">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>

            <div className="flex items-center border-3 border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500">
              <input
                type="email"
                id="email"
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
                placeholder="Enter your password"
                className="flex-1 min-w-0 outline-none bg-transparent"
              />

              <div className="hidden sm:block h-5 w-px bg-gray-300 mx-3" />

              <button
                type="button"
                onClick={() => setShowReset(true)}
                className="text-sm text-green-600 font-medium whitespace-nowrap hover:underline cursor-pointer"
              >
                Forgot?
              </button>

              <img
                src={assets.lock}
                alt="lock"
                className="w-5 h-5 ml-3 flex-shrink-0"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-600/70 mt-2 text-white w-full h-12 hover:bg-green-600 rounded-md font-semibold text-xl cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="text-left text-gray-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-[#36B37E] hover:underline ml-3.5"
          >
            Register
          </Link>
        </p>
      </div>

      {/* RESET MODAL */}
      {showReset && <ResetPasswordModal onClose={() => setShowReset(false)} />}
    </>
  );
};
