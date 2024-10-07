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
    <>
      <NavigationTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Render content based on activeTab */}
      {activeTab === 1 && <div>Content of Tab 1</div>}
      {activeTab === 2 && <div>Content of Tab 2</div>}
      {activeTab === 3 && <div>Content of Tab 3</div>}{" "}
    </>
  );
}

export default NavContent;
