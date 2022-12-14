import {
  HomeOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React from "react";
import GIcon from "../GIcon";
import Link from "next/link";

const SideBar = () => {
  return (
    <div
      style={{ maxWidth: "480px" }}
      className=" mx-auto bg-white fixed bottom-0 right-0 left-0 h-16 grid grid-cols-4 items-center justify-center z-10 "
    >
      <Link href={"/"} className="flex items-center justify-center">
        <GIcon>
          <HomeOutlined className="text-3xl !text-gray-300" />
        </GIcon>
      </Link>
      <Link href={"/cart"} className="flex items-center justify-center">
        <GIcon>
          <ShoppingCartOutlined className="text-3xl !text-blue-300" />
        </GIcon>
      </Link>
      <Link href={"/like"} className="flex items-center justify-center">
        <GIcon>
          <HeartOutlined className="text-3xl !text-gray-300" />
        </GIcon>
      </Link>
      <Link href={"/user"} className="flex items-center justify-center">
        <GIcon>
          <UserOutlined className="text-3xl !text-gray-300" />
        </GIcon>
      </Link>
    </div>
  );
};

export default SideBar;
