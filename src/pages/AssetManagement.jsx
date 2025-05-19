import React from 'react'
import { useParams } from 'react-router-dom'
import IPAMFeatureCard from '../components/IPAMFeatureCard/IPAMFeatureCard';
import AssetManagementSection from '../components/AssestManagement/VideoSection/VideoSection';
import Footer from '../components/Footer/Footer';
import HeroWithVideo from '../components/Herovideo/HeroCideo';
function AssetManagement() {
  const { id } = useParams();
   const handleDemoClick = () => {
        window.location.href = "https://calendly.com/margarita-centralaxis/30min?month=2025-05";
    }
  return (
    <div>
      {id &&
        <>
          <AssetManagementSection id={parseInt(id)} />
          <IPAMFeatureCard id={parseInt(id)} />
          <HeroWithVideo
            videoSrc="https://www.centralaxis.com/landing/asset-mgt.mp4"
            title="Transform Your Asset Management Today"
            subtitle="Experience the difference that intelligent, automated asset management can make for your data center"
            buttonText="Schedule a Demo"
            onButtonClick={handleDemoClick}
          />
        </>
      }
      {!id &&
        <div className="text-red-500 text-center py-10">Section not found.</div>

      }
      <Footer />
    </div>
  )
}

export default AssetManagement