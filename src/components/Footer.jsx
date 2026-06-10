import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div className="flex flex-row h-[600px] gap-6">
      <div className="w-2/5 flex flex-col items-start justify-start sm:gap-6 md:gap-20 xl:gap-28">
        <div className='w-full flex flex-col md:flex-row items-start justify-start gap-8 md:gap-20 xl:gap-60 mb-10'>
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold  text-green-600/60">HELP</h2>
                <span className="text-sm whitespace-nowrap font-semibold text-gray-500">Help Center</span>
                <span className="text-sm whitespace-nowrap font-semibold text-gray-500">Contact Us</span>
                <span className="text-sm whitespace-nowrap font-semibold text-gray-500">How to Use</span>
            </div>
            <div className="flex flex-col gap-6 font-semibold">
                <h2 className="text-xl font-bold  text-green-600/60">ABOUT</h2>
                <span className="text-sm whitespace-nowrap font-semibold text-gray-500">About Reem Bank</span>
                <span className="text-sm whitespace-nowrap font-semibold text-gray-500">Terms & Conditions</span>
                <span className="text-sm whitespace-nowrap font-semibold text-gray-500">Privacy Policy</span>
            </div>
        </div>
        <img src={assets.logo} alt="Reen Bank Logo" className="h-8 md:h-12 w-auto max-sm:mb-8 mb-4" />
        <div className="text-sm text-gray-500 font-semibold">
            <span>{new Date().getFullYear()} ReenBank. All rights reserved!</span>
            <div className="flex flex-row gap-3 mt-4">
                <img src={assets.facebook} alt="Facebook" className="h-6 w-6" />
                <img src={assets.twitter} alt="Twitter" className="h-6 w-6" />
                <img src={assets.instagram} alt="Instagram" className="h-6 w-6" />
            </div>
        </div>
      </div>
      <div
        className="w-3/5 bg-cover bg-center h-full rounded-tl-[100px] flex justify-end px-4 md:px-10 lg:px-16 py-12 text-white flex-col gap-4  md:gap-6"
        style={{ backgroundImage: `url(${assets.bgImage2})` }}
      >
        <span className="text-xl md:text-2xl">New to Reen Bank?</span>
        <span className="text-2xl md:text-4xl font-semibold">Enter you Email</span>
        <span className="text-2xl md:text-4xl font-semibold">and Get Started Now</span>
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-56 lg:w-64 border border-red-500 px-3 py-2 outline-none rounded"
          />

          <button className="bg-green-400 text-white px-8 py-2 rounded">
            Get Started
              
          </button>
        </div>
      </div>
    </div>
  );
};
