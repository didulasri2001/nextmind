"use client";
import React, { useState } from "react";
import TemplateListSection from "./_components/TemplateListSection";
import SearchSection from "./_components/SearchSection";

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  return (
    <div>
      <div>
        <SearchSection
          onSearchInput={(value: string) => setUserSearchInput(value)}
        />
      </div>
      <div>
        <TemplateListSection userSearchInput={userSearchInput} />
      </div>
    </div>
  );
}

export default Dashboard;
