import React from 'react';

const logos = [
  'https://www.centralaxis.com/landing/logos/hp.svg',
  'https://www.centralaxis.com/landing/logos/intel.svg',
  'https://www.centralaxis.com/landing/logos/lenovo.svg',
  'https://www.centralaxis.com/landing/logos/schneider.svg',
  'https://www.centralaxis.com/landing/logos/supermicro.svg',
  'https://www.centralaxis.com/landing/logos/cisco.svg',
  'https://www.centralaxis.com/landing/logos/amd.svg',
  'https://www.centralaxis.com/landing/logos/nvidia.svg',
];

export default function InfiniteCarousel() {
  return (
    <div className="py-6 overflow-hidden mt-10 bg-black">
      <p className="text-center text-gray-400 text-sm mb-10">
        Seamless integrations with any data center hardware
      </p>
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap gap-12">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="logo"
              className="h-12 object-contain grayscale opacity-80 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
