import React from 'react'
import FeatureCard from '../Cards/Cards';

const featuresData = [
  {
    title: 'Advanced Monitoring',
    description:
      'CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.',
    points: [
      'Real-time performance metrics and predictive analytics',
      'Automated alerts and intelligent incident response',
      'Comprehensive reporting and trend analysis',
    ],
    videoSrc: 'https://www.centralaxis.com/hb-monitoring.mp4',
  },
  {
    title: 'Network Management and Monitoring',
    description:
      'Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.',
    points: [
      'Real-time network performance monitoring and bandwidth optimization',
      'Automated network security and threat detection',
      'Advanced network diagnostics and troubleshooting tools',
    ],
    videoSrc: 'https://www.centralaxis.com/landing/networking-b.mp4',
  },
  {
    title: 'Asset Management',
    description:
      'Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.',
    points: [
      'Real-time network performance monitoring and bandwidth optimization',
      'Automated network security and threat detection',
      'Advanced network diagnostics and troubleshooting tools',
    ],
    videoSrc: 'https://www.centralaxis.com/landing/asset-management-b.mp4',
  },
  {
    title: 'A Single Pane of Glass',
    description:
      'Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.',
    points: [
      'Real-time network performance monitoring and bandwidth optimization',
      'Automated network security and threat detection',
      'Advanced network diagnostics and troubleshooting tools',
    ],
    videoSrc: 'https://www.centralaxis.com/landing/SinglePane-b.mp4',
  },
  {
    title: 'Built-In Compliance',
    description:
      'Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.',
    points: [
      'Real-time network performance monitoring and bandwidth optimization',
      'Automated network security and threat detection',
      'Advanced network diagnostics and troubleshooting tools',
    ],
    videoSrc: 'https://www.centralaxis.com/landing/__compliance.mp4',
  },
  {
    title: 'Data Center Planning',
    description:
      'Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.',
    points: [
      'Real-time network performance monitoring and bandwidth optimization',
      'Automated network security and threat detection',
      'Advanced network diagnostics and troubleshooting tools',
    ],
    videoSrc: 'https://www.centralaxis.com/landing/dc-planning.mp4',
  },
];
function BuildForAI() {
  return (
    <>
    <div className="w-full h-auto bg-[#09090b] flex flex-col items-center justify-center mt-11">
        <div className="flex flex-col items-center justify-center text-center gap-4 px-4 md:px-0">
            <h1 className=" text-[#6f6f78] bg-[#18181b] px-4 py-2 rounded-full text-sm cursor-pointer">
                Build for AI
            </h1>
            <h2 className="text-[#ffffff] text-2xl md:text-6xl font-bold">
                Modernizing the Digital Backbone
            </h2>
            <p className="text-gray-400 text-sm md:text-lg mb-8">
                Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way.
            </p>
        </div>
         <div className="bg-[#09090b] px-4 sm:px-8 lg:px-16 ">
      {featuresData.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          points={feature.points}
          videoSrc={feature.videoSrc}
          reverse={index % 2 === 1} 
        />
      ))}
    </div>
    </div>
    
    
    </>
  )
}

export default BuildForAI