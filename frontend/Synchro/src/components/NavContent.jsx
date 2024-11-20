import React, { useState } from "react";
import NavigationTabs from "./NavigationTabs";
function NavContent() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "View all" },
    { id: 2, label: "Media Files" },
    { id: 3, label: "PDFs" },
  ];

  return (
    <div className=" flex flex-col">
      <NavigationTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className=" mt-6">
        <div className=" flex bg-sidebarBg  font-rubikRegalar text-gray-500 gap-10">
          <p>File name</p>
          <p> Type </p>
          <p>Size</p>
          <p>Category</p>
          <p>/LastModified</p>
        </div>
        {/* Render content based on activeTab */}
        {activeTab === 1 && <div className=" ">Content of Tab 1</div>}
        {activeTab === 2 && <div>Content of Tab 2</div>}
        {activeTab === 3 && <div>Content of Tab 3</div>}{" "}
      </div>
    </div>
  );
}

export default NavContent;
