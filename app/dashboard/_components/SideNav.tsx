"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import React, { useEffect } from "react";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center border-b">
        <Image src={"/nextmindlogo.png"} alt="logo" width={200} height={100} />
      </div>

      <div className="mt-7 ">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex items-center gap-5 p-3 mb-2  hover:bg-[#f8e074] rounded-lg cursor-pointer ${
              path == menu.path && "bg-[#f8e074]"
            }`}
          >
            <menu.icon size={30} />
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
