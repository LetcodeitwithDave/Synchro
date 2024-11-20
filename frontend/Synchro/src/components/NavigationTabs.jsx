import React from "react";

function NavigationTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <>
      <div className=" flex space-x-2 bg-sidebarBg ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab == tab.id
                ? "bg-white  text-gray-900 font-rubikRegalar"
                : " text-gray-500 text-sm font-rubikRegalar"
            } px-4 py-1 rounded-md m-1`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
}

export default NavigationTabs;
