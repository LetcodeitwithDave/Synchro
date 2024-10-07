import React from "react";

function NavigationTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <>
      <div className=" flex space-x-4 bg-sidebarBg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab == tab.id
                ? "bg-white text-gray-900 font-rubikRegalar"
                : " text-gray-400 font-rubikRegalar"
            } px-4 py-2 rounded-lg`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
}

export default NavigationTabs;
