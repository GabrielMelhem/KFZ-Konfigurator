import React from "react";

const Navbar = ({ activeTab, onTabClick }) => {
  const tabs = [
    "Marke",
    "Motoren",
    "Farben",
    "Räder",
    "Sonderausstattung",
    "Zusammenfassung",
  ];
  return (
    <nav className="bg-gray-100 py-8 px-4 md:px-6 lg:px-8">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">KFZ Konfigurator</div>
        <div className="flex space-x-4">
        {tabs.map(tab => (
            <button
              key={tab}
              className={`text-blue-800 ${activeTab === tab ? 'font-bold' : 'opacity-50 cursor-not-allowed'}`}
              onClick={() => onTabClick(tab)}
              disabled={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
