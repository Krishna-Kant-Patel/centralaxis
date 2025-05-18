import React from 'react';

function MainVideo({ id }) {
  const data = [
    {
      id: 1,
      videoSrc: 'https://www.centralaxis.com/landing/networking-b.mp4',
      title: 'Network Monitoring',
    },
    {
      id: 2,
      videoSrc: 'https://www.centralaxis.com/hb-monitoring.mp4',
      title: 'Infrastructure Monitoring & Asset Management',
    },
    {
      id: 3,
      videoSrc: 'https://www.centralaxis.com/landing/dc-planning.mp4',
      title: 'Data Center Planning',
    },
    {
      id: 4,
      videoSrc: 'https://www.centralaxis.com/hb-monitoring.mp4',
      title: 'CentralAxis DCIM',
    },
  ];

  const selected = data.find(video => video.id == id);

  if (!selected) {
    return (
      <div className="text-white text-center py-20">
        <p>Video not found for the given ID.</p>
      </div>
    );
  }

  return (
    <div className='m-auto flex flex-col px-4 md:px-20 lg:px-40 py-11 items-baseline justify-center gap-4 w-full h-fit'>
      <h2 className="text-[#FAFAFA] text-4xl font-bold">{selected.title}</h2>
      <div className="px-0 md:px-12 w-full h-[300px] md:h-[450px] lg:h-[630px] flex items-center justify-center">
        <video
          src={selected.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
      <p className='self-center text-[#FAFAFA]'>
        CentralAxis Network Monitoring and Visualization Platform
      </p>
    </div>
  );
}

export default MainVideo;
