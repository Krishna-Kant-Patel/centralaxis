import React from 'react'
import { useParams } from 'react-router-dom'
import MainVideo from '../components/mainVideoBox/MainVideo'
import FeatureSection from '../components/FeatureSection/FeatureSection'
import Footer from '../components/Footer/Footer'

function DCManagement() {
    const {id} = useParams()
    return (
        <>
        {id && 
        <>
        <MainVideo id={id}/>
        <FeatureSection id={id}/>
        </>}
        <Footer/>

        </>)
}

export default DCManagement