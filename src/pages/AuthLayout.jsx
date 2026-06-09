import { assets } from "../assets/assets";
import { Outlet, useLocation } from "react-router-dom";

export const AuthLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/auth";

  return (
    <div
      className="min-h-screen w-screen bg-repeat flex flex-col md:flex-row items-center justify-center px-6 lg:px-16 xl:px-28 gap-10 md:gap-0 py-6"
      style={{
        backgroundImage: `url(${assets.bankingTheme})`,
        backgroundSize: "800px 500px",
        backgroundRepeat: "repeat",
      }}
    >
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left mr-3.5">
        <img
          src={assets.logo}
          alt=""
          className="h-12 md:h-14 xl:h-16 w-auto mb-10 md:mb-16 xl:mb-28"
        />

        <h1 className="text-lg md:text-xl font-bold text-green-600/60 mb-1">
          Reen Bank
        </h1>

        <h2 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-black/80 leading-tight xl:leading-16 2xl:leading-20">
          <p>
            {isLoginPage ? (
              "Welcome Back"
            ) : (
              <>
                Experience <br />
                hassle-Free Banking
              </>
            )}
          </p>
        </h2>

        <p className="font-semibold text-gray-500 w-full lg:w-5/6 mt-3 md:mt-4 2xl:mt-10 mb-10 md:mb-16 xl:mb-24">
          {isLoginPage
            ? "Enter Your Details to login to your Banking Dashboard again!"
            : "Experience simple, secure, and stress-free banking. Say goodbye to long queues and complex procedures and hello to hassle-free banking with Reen Bank."}
        </p>

        <div className="flex gap-3 md:gap-4">
          <img
            src={assets.facebook}
            alt="Facebook"
            className="h-5 w-5 md:h-6 md:w-6"
          />
          <img
            src={assets.twitter}
            alt="Twitter"
            className="h-5 w-5 md:h-6 md:w-6"
          />
          <img
            src={assets.instagram}
            alt="Instagram"
            className="h-5 w-5 md:h-6 md:w-6"
          />
        </div>
      </div>

      {/* RIGHT SIDE*/}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};
