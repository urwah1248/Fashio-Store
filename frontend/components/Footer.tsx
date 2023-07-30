import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative top-1">
      <hr />
      <div
        id="links"
        className="flex md:flex-row flex-col md:max-w-5xl md:mx-auto px-8 tracking-tighter py-4 gap-12"
      >
        <div className="">
          <Image
            className="mx-auto my-2 md:h-32 w-full md:w-auto md:min-w-[200px] max-w-[300px] object-contain"
            src={"/square-logo.png"}
            height={271}
            width={496}
            alt="asdasdg"
          />
          <HStack className="justify-center">
            <Link target="blank" href="https://www.facebook.com/fashiodotpk">
              <FaFacebook className="icon"/>
            </Link>
            <Link target="blank" href="https://www.instagram.com/fashiodotpk/">
              <FaInstagram className="icon"/>
            </Link>
            <Link target="blank" href="https://wa.me/923165955579">
              <FaWhatsapp className="icon"/>
            </Link>
          </HStack>
        </div>
        <div className="font-noto">
          <h3 className="uppercase">About Us</h3>
          <p>
            Fashio is an online Jewelry store that provides customer with
            beautiful and affordable rings, bracelets, lockets, and earrings.
          </p>
          <p>Explore our store to find latest jewelry we offer.</p>
        </div>
        <div className="font-noto whitespace-nowrap">
          <h3 className="uppercase">Links</h3>
          <ul className="underline">
            <Link href="/">
              <li className="py-1">Home</li>
            </Link>
            <Link href="/contact">
              <li className="py-1">Contact</li>
            </Link>
            <Link href="/returnpolicy">
              <li className="py-1">Return Policy</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex h-8 mb-0 py-0 font-inter justify-center items-center bg-zinc-900 text-gray-100">
        <p className="m-0">© Fashio | 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
