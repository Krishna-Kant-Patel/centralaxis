import React from 'react';
import HeroSection from '../components/Hero/Herosection';
import InfiniteCarousel from '../components/InfiniteCarousel/InfiniteCarousel';
import BuildForAI from '../components/BuildForAI/BuildForAI';
import DynamicResourceManagement from '../components/DynamicResource/DynamicResource';
import BookDemo from '../components/BookDemo/BookDemo';
import FAQSection from '../components/FAQs/FAQs';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <>
    <HeroSection />
    <InfiniteCarousel />
    <BuildForAI />
    <DynamicResourceManagement />
    <BookDemo />
    <FAQSection />
    <Footer />
    </>
  )
}

export default Home