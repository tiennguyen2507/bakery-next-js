import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="h-16 flex justify-between items-center px-5 ">
      <MenuOutlined />
      <Image src={logo} alt="log" height={50} />
      <Link href="/about" className="text-black">
        about
      </Link>
    </div>
  );
};

export default Header;
