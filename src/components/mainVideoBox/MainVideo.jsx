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
      videoSrc: 'https://www.centralaxis.com/landing/colocation-video.mp4',
      title: 'CentralAxis DCIM',
    },
    {
      id: 5,
      videoSrc: 'https://www.centralaxis.com/landing/insights.mp4',
      title: 'Custom Insights & Analytics',
    },
    {
      id: 6,
      videoSrc: 'https://www.centralaxis.com/landing/digital-twin.mp4',
      title: 'A Live 3D View of Your Infrastructure',
    },
    {
      id: 7,
      videoSrc: 'https://www.centralaxis.com/landing/power-mapping.mp4',
      title: 'End-to-End Power Mapping & Optimization',
    },
    {
      id: 8,
      videoSrc: 'https://www.centralaxis.com/landing/alerts.mp4',
      title: 'Predictive Failure Detection & Smart Alerting',
    },
    {
      id: 9,
      videoSrc: 'https://www.centralaxis.com/landing/controls.mp4',
      title: 'Smart Control Systems for Modern Data Centers',
    },
    {
      id: 10,
      videoSrc: '',
      title: 'AI-Powered Automated Discovery',
    },
    {
      id: 11,
      videoSrc: '',
      title: 'Custom Solutions Built for Your Data Center',
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
      <h2 className={`text-[#FAFAFA] text-4xl font-bold ${
        id>4 ? 'text-center self-center' : ''
      }`}>{selected.title}</h2>
      {selected.videoSrc && 
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
      }
      {id < 4 && <p className='self-center text-[#FAFAFA]'>
        CentralAxis Network Monitoring and Visualization Platform
      </p>}
      
    </div>
  );
}

export default MainVideo;
