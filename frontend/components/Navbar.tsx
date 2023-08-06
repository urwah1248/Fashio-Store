import React, { useState } from "react";
import Image from "next/image";
import { Layout } from "antd";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useRouter } from "next/router";
import CartButton from "./CartButton";
import { useSelector } from 'react-redux'
import CartDrawer from "./CartDrawer";

const { Header } = Layout;

const Navbar = () => {
  const router = useRouter();
  const path = router.pathname.split("/")[router.pathname.split("/").length-1];

  const [active, setActive] = useState(path ? path : "home");
  const [cartOpen, setCartOpen] = useState(false)

  const { cartItems } = useSelector((state: any) => {
    return state.AddAndRemoveToCartReducer;
  })

  const menuItems = [
    {
      key: "home",
      label: (
        <Link href="/" className=" text-black block">
          Home
        </Link>
      ),
    },
    {
      key: "rings",
      label: (
        <Link href="/shop/rings" className=" text-black block">
          Rings
        </Link>
      ),
    },
    {
      key: "earrings",
      label: (
        <Link href="/shop/earrings" className=" text-black block">
          Earrings
        </Link>
      ),
    },
    {
      key: "necklaces",
      label: (
        <Link href="/shop/necklaces" className=" text-black block">
          Necklaces
        </Link>
      ),
    },
    {
      key: "bangles",
      label: (
        <Link href="/shop/bangles" className=" text-black block">
          Bangles
        </Link>
      ),
    },
    {
      key: "bracelets",
      label: (
        <Link href="/shop/bracelets" className=" text-black block">
          Bracelets
        </Link>
      ),
    },
  ];

  return (
    <Header className="bg-slate-50 flex justify-between items-center px-2 md:px-8">
      {/* Mobile Nav */}
      <MobileNav items={menuItems} active={active} setActive={setActive} />
        {/* Logo */}
        <Link href="/" className="flex flex-col md:min-w-[200px] max-w-[250px] justify-center">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={605}
            height={118}
            className="object-contain w-auto h-6 opacity-70 hover:opacity-100 transition-[500ms]"
          />
        </Link>

        {/* Desktop Nav */}
        <DesktopNav items={menuItems} active={active} setActive={setActive} />

      {/* Right nav */}
      <div className="h-full px-5 md:flex justify-end md:w-[164px]">
        <button
        className={`${
            router.pathname === "/shop/cart"
            ? "pointer-events-none text-gray-300"
            : ""
        }`}
        onClick={() => setCartOpen(true)}
        >
          <CartButton count={cartItems.length} />
        </button>
      </div>
      <CartDrawer cartOpen={cartOpen} setCartOpen={setCartOpen}/>
    </Header>
  );
};

export default Navbar;
