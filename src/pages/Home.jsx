import React from 'react';
import HeroSection from '../components/Hero/Herosection';
import InfiniteCarousel from '../components/InfiniteCarousel/InfiniteCarousel';
import BuildForAI from '../components/BuildForAI/BuildForAI';

function Home() {
  return (
    <>
    <HeroSection />
    <InfiniteCarousel />
    <BuildForAI />
    </>
  )
}

export default Home