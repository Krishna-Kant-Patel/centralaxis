import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { Outlet, useNavigate } from 'react-router-dom';
import { menuItems, SolutionItems, complianceInfo, energyFundamentals } from '../Data/linkDatas';
import MobileDropdown from '../Dropdown/MobileDropdown';

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null); 

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleToggleDropdown = (index) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  const navigate = useNavigate();
  const handleLogoClick = () => navigate('/');

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 md:px-12 py-4 bg-black">
        <div onClick={handleLogoClick} className="flex items-center space-x-2 cursor-pointer">
          <img src="https://www.centralaxis.com/_next/image?url=%2Flogo_white_icon_only.png&w=96&q=75" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-semibold text-[#FAFAFA]">CentralAxis</span>
        </div>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Dropdown title="Data Center Infrastructure Management" items={menuItems} />
          <Dropdown title="Intelligence Solutions" items={SolutionItems} />
          <Dropdown title="Data Center Compliance" items={complianceInfo} />
          <Dropdown title="Sustainability Blog" items={energyFundamentals} />
        </nav>
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-16 right-0 left-0 flex flex-col bg-black rounded-lg shadow-lg p-4 z-50">
              <MobileDropdown
                title="Data Center Infrastructure Management"
                items={menuItems}
                isOpen={activeDropdown === 0}
                onToggle={() => handleToggleDropdown(0)}
              />
              <MobileDropdown
                title="Intelligence Solutions"
                items={SolutionItems}
                isOpen={activeDropdown === 1}
                onToggle={() => handleToggleDropdown(1)}
              />
              <MobileDropdown
                title="Data Center Compliance"
                items={complianceInfo}
                isOpen={activeDropdown === 2}
                onToggle={() => handleToggleDropdown(2)}
              />
              <MobileDropdown
                title="Sustainability Blog"
                items={energyFundamentals}
                isOpen={activeDropdown === 3}
                onToggle={() => handleToggleDropdown(3)}
              />
            </div>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default NavBar;
