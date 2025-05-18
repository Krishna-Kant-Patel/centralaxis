import React from "react";
import {
  MailIcon,
  ZapIcon,
  BarChartIcon,
  SmileIcon,
  LayoutIcon,
} from "lucide-react"; 

const features = [
  {
    icon: <MailIcon className="w-6 h-6 text-white" />,
    title: "Resource Management",
    description:
      "See all of your resources in one place, update issues, and dynamically plan your resources.",
  },
  {
    icon: <ZapIcon className="w-6 h-6 text-white" />,
    title: "Deployment Automation",
    description:
      "From design, sourcing, supply, manufacturing, and deployment – our system automates the entire process.",
  },
  {
    icon: <BarChartIcon className="w-6 h-6 text-white" />,
    title: "Networking",
    description:
      "Ensure that your networking infrastructure is always in place and ready to scale with your deployments.",
  },
  {
    icon: <SmileIcon className="w-6 h-6 text-white" />,
    title: "Firmware Versioning",
    description:
      "Ensure that your firmware is always up to date and secure with our automated versioning system.",
  },
  {
    icon: <LayoutIcon className="w-6 h-6 text-white" />,
    title: "Digital Twins",
    description:
      "Plan capacity intelligently with our digital twin technology.",
  },
];

export default function DynamicResourceManagement() {
  return (
    <section className=" text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        <div>
          <span className="bg-[#18181B] text-xs px-3 py-1 rounded-full inline-block mb-4">
            Built for Scale
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dynamic Resource Management
          </h2>
          <p className="text-[#71717A] text-xl mb-6">
            Seamlessly expand from racks to data centers. Our system grows with you,
            automatically managing resources across your entire infrastructure.
          </p>
        </div>

        <div className="space-y-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-[#18181B] rounded-lg shadow-md"
            >
              <div className="bg-[#18181B] rounded-full p-2">{item.icon}</div>
              <div>
                <h3 className="text-[#FAFAFA] font-semibold">{item.title}</h3>
                <p className="text-[#71717A] text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
