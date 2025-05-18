import React from 'react'
import Dropdown from '../Dropdown/Dropdown';
import { Outlet } from 'react-router-dom';
import { menuItems, SolutionItems, complianceInfo, energyFundamentals } from '../Data/linkDatas';

function NavBar() {
//     const menuItems = [
//   "Monitoring Devices",
//   "Asset Tracking",
//   "Network Management",
//   "Change Management",
//   "Colocation Management",
//   "Data Center Planner",
//   "Firmware Management",
//   "IP Address Management",
//   "Customer Portal",
//   "Custom Insights"
// ];
// const SolutionItems = [
//   "Digital Twins",
//   "Smart Power Mapping",
//   "Predictive Failure and Alerting",
//   "Smart Control Systems",
//   "Automated Discovery"
// ];
// const complianceInfo = [
//   "DCOI Compliance",
//   "(EU) 2023/1791",
//   "EN 50600",
//   "LEED Certification",
//   "ISO/IEC 30134-2",
//   "(EPA) ENERGY STAR",
//   "European Commission Joint Research Centre (JRC)"
// ];
// const energyFundamentals = [
//   "Energy Efficiency",
//   "Stranded Energy Map",
//   "Environmental Product Declaration",
//   "Renewables Integration",
//   "Power Resource Management"
// ];
  return (
    <div><header className="flex items-center justify-between px-4 md:px-12 py-4 bg-black">
        <div className="flex items-center space-x-2">
          <img src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold">CentralAxis</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Dropdown title="Data Center Infrastructure Management " items={menuItems} boolean={false}/>
          <Dropdown title="Intelligence Solutions" items={SolutionItems} boolean={false}/>
          <Dropdown title="Data Center Compliance" items={complianceInfo} boolean={false}/>
          <Dropdown title="Sustainability Blog" items={energyFundamentals}   boolean={true} />
          
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      <Outlet />
      </div>
  )
}

export default NavBar