import { useEffect, useRef } from 'react';

const logos = [
  'https://www.centralaxis.com/landing/logos/hp.svg',
  'https://www.centralaxis.com/landing/logos/intel.svg',
  '	https://www.centralaxis.com/landing/logos/lenovo.svg',
  'https://www.centralaxis.com/landing/logos/schneider.svg',
  '	https://www.centralaxis.com/landing/logos/supermicro.svg',
  'https://www.centralaxis.com/landing/logos/cisco.svg',
  'https://www.centralaxis.com/landing/logos/amd.svg',
  'https://www.centralaxis.com/landing/logos/nvidia.svg',
  'https://www.centralaxis.com/landing/logos/cisco.svg',
];

export default function InfiniteCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className=" py-6 overflow-hidden mt-10">
      <p className="text-center text-gray-400 text-sm mb-10">
        Seamless integrations with any data center hardware
      </p>
      <div
        ref={scrollRef}
        className="flex gap-12 w-full whitespace-nowrap overflow-hidden scroll-smooth"
      >
        {/* Repeat logos twice for seamless loop */}
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
  );
}
