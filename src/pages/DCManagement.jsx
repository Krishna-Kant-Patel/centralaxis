import React from 'react'
import { useParams } from 'react-router-dom'
import MainVideo from '../components/mainVideoBox/MainVideo'
import FeatureSection from '../components/FeatureSection/FeatureSection'
import Footer from '../components/Footer/Footer'
import HeroWithVideo from '../components/Herovideo/HeroCideo'

function DCManagement() {
    const { id } = useParams()
    const handleDemoClick = () => {
        window.location.href = "https://calendly.com/margarita-centralaxis/30min?month=2025-05";
    }
    return (
        <>
            {id &&
                <>
                    <MainVideo id={id} />
                    <FeatureSection id={id} />
                    <HeroWithVideo
                        videoSrc="https://www.centralaxis.com/hb-monitoring.mp4" 
                        title="Give Your Colocation Customers the Experience They Deserve"
                        subtitle="With CentralAxis, you can offer a modern, data-rich portal as a built-in part of your colocation service."
                        buttonText="Schedule a Demo"
                        onButtonClick={handleDemoClick}
                    />

                </>}
            <Footer />

        </>)
}

export default DCManagement