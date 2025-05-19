import React from "react";
import { featureData } from "../Data/info";
import { useEffect, useState } from "react";

const FeatureSection = ({ id }) => {
    //   const section = featureData.find((section) => section.id === id);
    const [section, setSection] = useState(null);


    useEffect(() => {
        if (id) {
            console.error("No id provided", featureData);
            const section = featureData.find(item => item.id == id);
            setSection(section);
            console.error(`No section found for id: ${id}`);
        }
    }, [id]);

    if (!section) {
        return (
            <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <p className="text-red-400" onClick={() => console.log(section)} >No data found for this section.</p>
                </div>
            </section>
        );
    }

    const { title, subParagraph, subtitle, items, bottumPoints, bottumHeading} = section;

    return (
        <section className=" text-white py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
               <div className={` m-auto ${
        id>4 ? 'text-center self-center lg:w-[80%]' : ''
      }`}>
                 <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-lg mb-10">{subParagraph}</p>
               </div>

                <h3 className="text-2xl font-semibold mb-6">{subtitle}</h3>
                <div className="flex flex-row items-center justify-between flex-wrap gap-4 pl-16">
                    {items.map((item, idx) => (
                        <div key={idx} className=" text-white lg:w-[45%] flex flex-col items-baseline justify-center pb-14">
                            <h4 className="text-xl font-semibold mb-2">{item.pointTitle}</h4>
                            <ul className="list-disc list-inside space-y-2 text-base text-[#FAFAFA">
                                {item.pointers.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                            
                        </div>
                    ))}
                </div>
                <h3 className="text-2xl font-semibold mb-6">{bottumHeading}</h3>
                <div className="flex flex-row items-center flex-wrap gap-14 px-16">
                    {bottumPoints.map((item, idx) => (
                        <div key={idx} className=" text-white  flex flex-col items-baseline justify-center pb-14">
                            <h4 className="text-xl font-semibold mb-2">{item.pointTitle}rr</h4>
                            <ul className="list-disc list-inside space-y-2 text-base text-[#FAFAFA">
                                {item.pointers.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                            
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default FeatureSection;
