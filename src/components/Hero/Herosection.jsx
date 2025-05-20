import React from "react";
import Dropdown from "../Dropdown/Dropdown";

const HeroSection = () => {


  const handleDemoClick = () => {
    window.location.href = "https://calendly.com/margarita-centralaxis/30min?month=2025-05";
  }

  return (
    <div className="bg-black text-white flex flex-col">


      <div className="flex flex-row md:flex-row flex-wrap items-center justify-center ">
        <div className="border w-[10%] border-[#1c1c20] min-h-[400px] lg:w-[10%]"></div>
        <div className="border  border-[#1c1c20] min-h-[400px] w-[80%] flex">
          <section className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-0">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-300 mb-4">
              Data Center Management <span className="text-white">Software</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-lg mb-2">
              Increase uptime, reduce costs, automate operations, and stay compliant.
            </p>
            <p className="text-gray-400 text-sm md:text-lg mb-8">
              Built for colocations, data centers, and cloud providers.
            </p>


          </section>
        </div>
        <div className="border border-[#1c1c20] min-h-[400px] w-[10%]"></div>
        <div className="border border-[#1c1c20] min-h-[100px] w-[10%]"></div>
        <div className="border border-[#1c1c20] min-h-[100px] w-[80%] flex  justify-center">
          <button style={{ boxShadow: "10px 10px 100px #8357e7" }} onClick={handleDemoClick} className="bg-[#8357e7] w-1/2 lg:w-[30%] h-[60px] hover:bg-purple-700 transition text-white font-medium px-6 py-3 shadow-custom ">
            Request Demo
          </button>
        </div>
        <div className="border border-[#1c1c20] min-h-[100px] w-[10%]"></div>
      </div>

    </div>
  );
};

export default HeroSection;
