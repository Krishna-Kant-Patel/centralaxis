import React from "react";
import { ipamFeatures } from "../Data/featuredata";

const IPAMFeatureCard = ({ id }) => {
    const data = ipamFeatures.find((section) => section.id === id);


    if (!data) {
        return <div className="text-red-500 text-center py-10">Section not found.</div>;
    }

    return (
        <div  className="w-full md:w-1/2 lg:w-full px-4 mb-8">
            <h3 className="text-white text-3xl self-center text-center font-semibold mb-2">{data.title}</h3>
            <div  className="w-full text-wrap flex flex-col lg:flex-row items-center justify-center flex-wrap gap-6 lg:gap-10 px-0 py-10 text-white lg:h-auto lg:px-[10%] lg:py-12">
                {data.data.map((feature, index) => (
                    <ul  className="h-auto w-auto lg:w-1/4 list-disc list-inside text-white" key={index}>{feature.heading}
                    {feature?.features.map((item, idx)=><li className="text-white text-lg" key={idx}>{item}aa</li>
                    )}
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default IPAMFeatureCard;
