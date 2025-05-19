import React from "react";
import assetSections from "../../Data/assetSections";

const AssetManagementSection = ({ id }) => {
    // Find the section data using the id
    const data = assetSections.find((section) => section.id === id);

    // Handle invalid id
    if (!data) {
        return <div className="text-red-500 text-center py-10">Section not found.</div>;
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center p-6">
                <h1 className="text-4xl font-bold text-[#FAFAFA]">{data.heading}</h1>
                <div className="flex flex-col lg:flex-row items-center justify-center object-contain gap-8 px-6 py-16 text-white lg:h-[481px] lg:px-[10%] lg:py-12 rounded-xl shadow-lg">

                    {/* Video Section */}
                    <div className="w-full lg:w-1/2 lg:h-full">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="max-h-full object-cover shadow-lg"
                        >
                            <source src={data.videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Text Content */}
                    <div  className="w-full lg:w-1/2 space-y-6">
                        <h3 className="text-2xl font-semibold">{data.subheading}</h3>
                        <p className="text-[#FAFAFA] text-lg">{data.description}</p>

                        <ul className="list-disc space-y-2 pl-5 text-lg text-[#FAFAFA]">
                            {data.features.map((feature, index) => (
                                <li key={index}>
                                    <strong>{feature.title}</strong> {feature.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div  className="flex flex-col  items-center justify-between gap-10 bg-black text-white px-6 py-12">
                {/* Left Text Section */}
                <h2 className="text-[24px] font-bold">
                    {data.heading2}
                </h2>
                <div  className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 text-white lg:h-[481px] lg:px-[5%] ">
                    <div  className="w-full h-full lg:w-1/2 flex flex-col items-baseline justify-center">

                        <p className="text-[18px]">
                            {data.description2}
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-[18px]">
                            {data.features2.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                            
                        </ul>

                    </div>

                    <div className="w-full h-full bg-white lg:w-1/2 rounded-xl p-5 ">
                        <img
                            src={data.imageSrc}
                            alt="Work Order Preview"
                            className="rounded-xl w-full h-full"
                        />
                    </div>
                </div>


                {/* Right Image Section */}

            </div>
        </>
    );
};

export default AssetManagementSection;
