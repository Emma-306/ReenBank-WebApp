import { assets } from "../assets/assets";

export const Hero = () => {
  return (
    <div className="flex flex-row w-full min-h-96 relative">
      <div className="w-full lg:w-2/5 py-4 2xl:py-10">
        <h1 className="text-xl font-bold text-green-600/60 mb-2">Reen Bank</h1>
        <h2 className="text-5xl xl:text-6xl font-bold text-black/80 leading-16 2xl:leading-20">
          Experience <br /> hassle-free banking
        </h2>
        <p className="font-semibold text-gray-500 w-5/6 mt-4 2xl:mt-10">
          Experience simple, secure, and stress-free banking. Say goodbye to
          long queues and coplex procedures and hello to hassle-free banking
          with Reen Bank
        </p>
        <div className="w-full h-24 mt-6 2xl:mt-12 mb-2 2xl:mb-6 flex flex-row">
          <button className="border-3 border-green-600/50 px-6 lg:px-14 py-2 h-16 rounded-md font-semibold text-green-600/50 hover:bg-green-800/80 hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap">
            Get Started
          </button>
          <button className="border-3 border-green-600/50 px-6 lg:px-14 py-2 h-16 rounded-md font-semibold text-green-600/50 hover:bg-green-800/80 hover:text-white transition-all duration-300 cursor-pointer ml-4 whitespace-nowrap">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-3/5 hidden lg:flex justify-end items-center h-[500px]">
        <img
          src={assets.bgImage1}
          alt="Hero"
          className="w-full max-w-[750px] object-cover"
        />
      </div>
    </div>
  );
};
