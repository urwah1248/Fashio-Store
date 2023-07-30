import React, { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import Image from "next/image";

interface Props {
    items: any,
    active: any,
    setActive: any
}

const MobileNav = ({ items, active, setActive }:Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Add an event listener to detect window resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Set the breakpoint as needed
        setOpen(false); // Close the drawer when in desktop view
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onClick = (item:any) => {
    onClose();
    setActive(item.key);
  };

  return (
    <div className="md:hidden block">
      <MenuOutlined className="md:hidden block p-4" onClick={showDrawer} />
      <Drawer
        title={
          <div className="px-6">
            <Image
                src="/logo.png"
                alt="Picture of the author"
                width={605}
                height={118}
                className="object-contain w-auto h-6 opacity-70 hover:opacity-100 transition-[500ms]"
            />
          </div>
        }
        open={open}
        closable
        placement="left"
        onClose={onClose}
      >
        <Menu
          defaultActiveFirst={active}
          selectedKeys={[active]}
          className={`bg-transparent border-0 `}
          mode={"inline"}
          items={items}
          onClick={(item) => onClick(item)}
        />
      </Drawer>
    </div>
  );
};

export default MobileNav;
