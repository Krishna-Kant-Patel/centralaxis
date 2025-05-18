import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-black text-white flex flex-col">
      {/* Navbar */}
      <header className="flex items-center justify-between px-4 md:px-12 py-4 bg-black">
        <div className="flex items-center space-x-2">
          <img src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold">CentralAxis</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <div className="cursor-pointer">Data Center Infrastructure Management ▾</div>
          <div className="cursor-pointer">Intelligence Solutions ▾</div>
          <div className="cursor-pointer">Data Center Compliance ▾</div>
          <div className="cursor-pointer">Sustainability Blog ▾</div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="">

      </div>
      <div  className="flex flex-col md:flex-row flex-wrap items-center justify-center ">
        <div className="border border-[#1c1c20] min-h-[400px] lg:w-[10%]"></div>
        <div className="border border-[#1c1c20] min-h-[400px] lg:w-[80%] flex">
           <section  className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-0">
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
        <div className="border border-[#1c1c20] min-h-[400px] lg:w-[10%]"></div>
        <div className="border border-[#1c1c20] min-h-[100px] lg:w-[10%]"></div>
        <div className="border border-[#1c1c20] min-h-[100px] lg:w-[80%] flex  justify-center">
          <button style={{boxShadow:"10px 10px 100px #8357e7"}} className="bg-[#8357e7] w-[30%] h-[60px] hover:bg-purple-700 transition text-white font-medium px-6 py-3 shadow-custom ">
          Request Demo
        </button>
        </div>
        <div className="border border-[#1c1c20] min-h-[100px] lg:w-[10%]"></div>
      </div>
     
    </div>
  );
};

export default HeroSection;
