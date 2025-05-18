import { Link } from "react-router-dom";
const Dropdown = ({ title, items, boolean }) => {
  return (
    <div className="relative group inline-block">
      {/* Trigger area */}
       <div className="cursor-pointer flex items-center text-sm text-[#FAFAFA] hover:text-gray-300 transition-colors">
        {title}
        <span
          className="text-3xl transform transition-transform duration-300 group-hover:rotate-180"
        >
          ▾
        </span>
      </div>

      {/* Dropdown menu */}
      <div style={{border:"1px solid #FFFFFF"}}
        className={`borrder-2 border-[#FFFFFF] absolute left-0 ${boolean? '-left-24' : null} mt-2 w-64 bg-black text-[#FAFAFA] rounded-md shadow-lg ring-1 ring-white ring-opacity-5
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible
                   transition-all duration-300 z-50`}
      >
        <ul className="py-2 ">
          {items.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-700">
              <Link to={item.link} className="block text-sm">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
