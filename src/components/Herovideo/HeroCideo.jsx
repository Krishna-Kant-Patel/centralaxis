import React from "react";

const HeroWithVideo = ({ videoSrc, title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="relative flex items-center justify-center w-[90%] lg:w-[80%] m-auto mb-6 h-[216px] overflow-hidden lg:px-[10%]">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10 flex items-center justify-center mb-10 lg:p-8">
        <div className="text-center text-white px-2 lg:px-4 lg:max-w-3xl">
          <h1 className=" text-xl lg:text-3xl md:text-2xl font-bold mb">{title}</h1>
          <p className=" text-lg lg:text-lg md:text-xl mb-6">{subtitle}</p>
          <button
            onClick={onButtonClick}
            className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroWithVideo;
