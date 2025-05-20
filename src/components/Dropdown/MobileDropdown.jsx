
import { Link } from "react-router-dom";

const MobileDropdown = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="w-full mb-2">
      <div
        onClick={onToggle}
        className="cursor-pointer flex items-center justify-between text-sm text-[#FAFAFA] py-2"
      >
        {title}
        <span
          className={`text-2xl transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </div>

      {isOpen && (
        <div className="bg-black text-[#FAFAFA] rounded-md ring-1 ring-white ring-opacity-5 transition-all duration-300">
          <ul className="py-2">
            {items.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-700">
                <Link to={item.link} className="block text-[#707079] text-sm">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;
