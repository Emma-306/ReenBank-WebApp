import { useState } from "react";
import { assets } from "../../assets/assets";
import { ResetPasswordModal } from "./ResetPasswordModal";

export const Login = () => {
  const [showReset, setShowReset] = useState(false);

  return (
    <>
      {/* LOGIN CARD */}
      <div className="bg-white p-8 md:p-12 xl:p-16 rounded-3xl w-full max-w-3xl min-h-[330px] shadow-[0_25px_70px_rgba(34,197,94,0.25)]">

        <form className="space-y-5">

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">Email</label>

            <div className="flex items-center border-3 border-gray-300 rounded-md px-4 py-2 focus-within:ring-2 focus-within:ring-green-500">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 outline-none bg-transparent"
              />

              <img src={assets.envelope} alt="email" className="w-5 h-5 ml-3 flex-shrink-0" />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold">Password</label>

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

              <img src={assets.lock} alt="lock" className="w-5 h-5 ml-3 flex-shrink-0" />
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-600/70 mt-2 text-white w-full h-12 hover:bg-green-600 rounded-md font-semibold text-xl cursor-pointer"
          >
            Login
          </button>

        </form>
      </div>

      {/* RESET MODAL */}
      {showReset && (
        <ResetPasswordModal onClose={() => setShowReset(false)} />
      )}
    </>
  );
};