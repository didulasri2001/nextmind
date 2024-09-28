import React from "react";
import TemplateListSection from "./_components/TemplateListSection";
import SearchSection from "./_components/SearchSection";

function Dashboard() {
  return (
    <div>
      <div>
        <SearchSection />
      </div>
      <div>
        <TemplateListSection />
      </div>
    </div>
  );
}

export default Dashboard;
