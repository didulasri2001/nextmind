import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex p-2 shadow-sm border-b-2 justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-md">
        <Search size={20} />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>
      <div>
        <h2 className="bg-[#51a2d9] p-2 text-sm text-white rounded-full">
          Join Membership just for $9.99/Month
        </h2>
      </div>
    </div>
  );
}

export default Header;
