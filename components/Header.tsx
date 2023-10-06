import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "assets/logo.png";
import { InfoCircleOutlined, MenuOutlined } from "@ant-design/icons";
import BaseIcon from "./atoms/GIcon";

const Header = (): JSX.Element => {
  return (
    <div
      className="bg-white sticky top-0 right-0 left-0 h-16 
    flex justify-between items-center px-2 z-50"
    >
      <BaseIcon>
        <MenuOutlined />
      </BaseIcon>
      <Image src={logo} alt="log" height={50} />
      <Link href="/about" className="text-black">
        <BaseIcon>
          <InfoCircleOutlined className="text-xl !text-black-300" />
        </BaseIcon>
      </Link>
    </div>
  );
};

export default Header;
