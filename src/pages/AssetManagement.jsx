import React from 'react'
import { useParams } from 'react-router-dom'
import IPAMFeatureCard from '../components/IPAMFeatureCard/IPAMFeatureCard';
import AssetManagementSection from '../components/AssestManagement/VideoSection/VideoSection';
import Footer from '../components/Footer/Footer';
function AssetManagement() {
    const { id } = useParams();
  return (
    <div>
        {id &&
        <>
        <AssetManagementSection id={parseInt(id)} />
        <IPAMFeatureCard id={parseInt(id)} />
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