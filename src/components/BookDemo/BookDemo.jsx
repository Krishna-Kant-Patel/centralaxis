import React from "react";


export default function BookDemo() {
  const handleDemoClick = () => {
    window.location.href = "https://calendly.com/margarita-centralaxis/30min?month=2025-05";
  }
  return (
    <section className="py-6  px-4 lg:px-20 ">
      <div
        className="relative rounded-xl overflow-hidden bg-cover bg-center min-h-[248px] md:min-h-[250px] flex items-center justify-center"
        style={{
          backgroundImage: `url(https://www.centralaxis.com/background.png)`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center text-[#FFFFFF] px-4">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">Book a Demo</h2>
          <p className="text-sm md:text-xl text-[#FFFFFFB2] mb-4">
            See how CentralAxis can revolutionize your data center operations.
          </p>
          <button onClick={handleDemoClick} className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100 transition">
            Schedule Now
          </button>
        </div>
      </div>
    </section>
  );
}
