import { Button, App } from "antd";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FacebookFilled,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useTitle } from "@/context/titleContext";

const imageUrl = `${process.env.NEXT_PUBLIC_URL}/contact.png`;
export default function Contact() {
  const { changeTitle } = useTitle();
  const { message } = App.useApp();

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    message.success(`${content} is copied to clipboard`);
  };

  useEffect(() => {
    changeTitle(`Contact | Fashio.pk`);
  }, []);
  return (
    <div className="mx-auto">
      <div
        className={`bg-[url(http://localhost:3000/contact.png)] py-16 md:py-24 bg-cover bg-center`}
      >
        <h1 className="page-header drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] outline-1 outline-black text-gray-50">
          Contact Us
        </h1>
      </div>
      <div className="w-11/12 mx-auto max-w-4xl mt-4 flex flex-col gap-4 sm:text-lg">
        <p>
          We love hearing from you! Whether you have a question, a comment, or a
          special request, we are here to help.
        </p>
        <div className="text-center">
          <p className="mb-2">
            You can reach us by phone or Whatsapp at{" "}
            <span
              className="font-semibold whitespace-nowrap hover:underline hover:cursor-pointer"
              onClick={() => {
                copyToClipboard("+923165955579");
              }}
            >
              +92 316 5955579
            </span>
            .
          </p>
          <div className="flex gap-2 sm:flex-row flex-col justify-center">
            <Link href="tel:+923165955579">
              <Button
                size="large"
                type="primary"
                className="bg-blue-500 hover:bg-blue-400 shadow-none w-full"
                icon={<PhoneOutlined />}
              >
                Call Us
              </Button>
            </Link>
            <Link target="blank" href="https://wa.me/923165955579">
              <Button
                size="large"
                type="primary"
                className="bg-green-600 hover:bg-green-500 shadow-none w-full"
                icon={<WhatsAppOutlined />}
              >
                Whatsapp Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-2">
            You can also reach us by email at{" "}
            <span
              className="font-semibold whitespace-nowrap hover:underline hover:cursor-pointer"
              onClick={() => {
                copyToClipboard("contact@fashio.pk");
              }}
            >
              contact@fashio.pk
            </span>
            .
          </p>
          <Link href="mailto:contact@fashio.pk">
            <Button
              size="large"
              type="primary"
              className="bg-red-500 hover:bg-red-400 shadow-none w-full sm:w-28"
              icon={<MailOutlined />}
            >
              Email Us
            </Button>
          </Link>
        </div>
        <div className="text-center">
          <p className="mb-2">
            You can also follow us on Facebook and Instagram to see our latest
            collections, promotions, and events.
          </p>
          <div className="flex gap-2 sm:flex-row flex-col justify-center">
            <Link target="blank" href="https://www.facebook.com/fashiodotpk">
              <Button
                size="large"
                type="primary"
                className="bg-blue-900 hover:bg-blue-800 shadow-none w-full"
                icon={<FacebookFilled />}
              >
                Like
              </Button>
            </Link>
            <Link target="blank" href="https://www.instagram.com/fashiodotpk/">
              <Button
                size="large"
                type="primary"
                className="bg-pink-700 hover:bg-pink-600 shadow-none w-full"
                icon={<InstagramOutlined />}
              >
                Follow
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col justify-center items-center gap-3">
  <h3 className="tracking-tight text-center">
    Contact us on any of our Social media accounts
  </h3>
  <Link target="blank" href="https://www.facebook.com/fashiodotpk">
    <Button colorScheme="facebook" className="w-48">
      <FaFacebook />
      /fashiodotpk
    </Button>
  </Link>
  <Link target="blank" href="https://www.instagram.com/fashiodotpk/">
    <Button colorScheme="pink" className="w-48">
      <FaInstagram />
      /fashiodotpk
    </Button>
  </Link>
  <Link target="blank" href="https://wa.me/923165955579">
    <Button colorScheme="green" className="w-48">
      <FaWhatsapp /> +92 316 5955579
    </Button>
  </Link>
</div>; */
}
