import {
  HomeOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React from "react";
import GIcon from "../GIcon";

const SideBar = () => {
  return (
    <div className="container mx-auto bg-white fixed bottom-0 right-0 left-0 h-16 grid grid-cols-4 items-center justify-center z-10 shadow">
      <div className="flex items-center justify-center">
        <GIcon>
          <HomeOutlined className="text-2xl !text-gray-300" />
        </GIcon>
      </div>
      <div className="flex items-center justify-center">
        <GIcon>
          <ShoppingCartOutlined className="text-2xl !text-blue-300" />
        </GIcon>
      </div>
      <div className="flex items-center justify-center">
        <GIcon>
          <HeartOutlined className="text-2xl !text-gray-300" />
        </GIcon>
      </div>
      <div className="flex items-center justify-center">
        <GIcon>
          <UserOutlined className="text-2xl !text-gray-300" />
        </GIcon>
      </div>
    </div>
  );
};

export default SideBar;
