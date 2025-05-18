import React from 'react';
import HeroSection from '../components/Hero/Herosection';
import InfiniteCarousel from '../components/InfiniteCarousel/InfiniteCarousel';
import BuildForAI from '../components/BuildForAI/BuildForAI';
import DynamicResourceManagement from '../components/DynamicResource/DynamicResource';

function Home() {
  return (
    <>
    <HeroSection />
    <InfiniteCarousel />
    <BuildForAI />
    <DynamicResourceManagement />
    </>
  )
}

export default Home