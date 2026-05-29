import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { assets } from "../assets/assets";
import { Faqs } from "../components/Faqs";
import { SupportedPayments } from "../components/SupportedPayments";
import { Footer } from "../components/Footer";

export const LandingPage = () => {
  return (
    <>
      <div className="bg-green-400/20 px-6 lg:px-16 py-8 md:py-10">
        <NavBar />
        <Hero />
      </div>
      <div className="px-6 lg:px-16 py-8 md:py-10">
        <Services />
      </div>
      <div className="bg-green-400/20 px-6 lg:px-16 py-8 md:py-10 relative w-full">
        <img src={assets.questionMark} alt="Question Mark" className='top-0 right-0 absolute h-full' />
        <Faqs />
      </div>
      <div className="px-6 lg:px-16 py-8 md:py-16 flex flex-col items-center justify-center">
        <SupportedPayments />
      </div>
      <div className="bg-green-400/20 pl-6 lg:pl-16 pt-8 md:pt-16">
        <Footer/>
      </div>
    </>
  );
};
