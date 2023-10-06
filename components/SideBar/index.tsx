import {
  HomeOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React from "react";
import BaseIcon from "../atoms/GIcon";
import Link from "next/link";

const SideBar = () => {
  return (
    <div
      style={{ maxWidth: "375px" }}
      className=" mx-auto bg-white fixed bottom-0 right-0 
      left-0 h-16 grid grid-cols-4 items-center justify-center z-10
      border-t-2 rounded-xl border-yellow-200
      "
    >
      <Link href={"/"} className="flex items-center justify-center">
        <BaseIcon>
          <HomeOutlined className="text-xl !text-gray-300" />
        </BaseIcon>
      </Link>
      <Link href={"/cart"} className="flex items-center justify-center">
        <BaseIcon>
          <ShoppingCartOutlined className="text-3xl !text-gray-300" />
        </BaseIcon>
      </Link>
      <Link href="/like" className="flex items-center justify-center">
        <BaseIcon>
          <HeartOutlined className="text-3xl !text-gray-300" />
        </BaseIcon>
      </Link>
      <Link href={"/user"} className="flex items-center justify-center">
        <BaseIcon>
          <UserOutlined className="text-3xl !text-gray-300" />
        </BaseIcon>
      </Link>
    </div>
  );
};

export default SideBar;
