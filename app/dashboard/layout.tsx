import React from "react";
import SideNav from "./_components/SideNav";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="w-64 fixed">
        <SideNav></SideNav>
      </div>
      <div className="ml-64">{children}</div>
    </div>
  );
}

export default layout;
