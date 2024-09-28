import { Search } from "lucide-react";
import React from "react";

function SearchSection() {
  return (
    <div className="p-10 bg-gradient-to-br from-[#f8e074] via-[#c0cb95] to-[#51a2d9] flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p>What would you like to create today ?</p>
      <div className="w-full flex justify-center ">
        <div className="flex gap-4 items-center p-2  border rounded-md mt-5 bg-white w-[50%]">
          <Search size={20} className="text-black" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-transparent text-black"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
