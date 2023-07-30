import React from "react";
import { Menu } from "antd";

interface Props {
    items: any,
    active: any,
    setActive: any
}

const DesktopNav = ({ items, active, setActive }:Props) => {
  return (
    <div className="md:flex justify-center hidden h-1/2 flex-grow leading-none mt-6">
      <Menu
        className="bg-transparent h-full w-full justify-center border-0 font-inter uppercase"
        selectedKeys={[active]}
        mode={"horizontal"}
        items={items}
        onClick={(item) => setActive(item.key)}
      />
    </div>
  );
};

export default DesktopNav;