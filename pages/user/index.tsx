import { Divider } from "antd";
import Image from "next/image";
import React from "react";
import slide01 from "../../assets/cakeVector.png";
import logoGoogle from "../../assets/logoGoogle.png";

const User = () => {
  return (
    <div className="p-4">
      <div className="text-center pt-10">
        <h2>Chào mừng bạn đã đến với</h2>
        <h3 className="text-2xl font-bold">Tiệm Bánh Kem</h3>
      </div>
      <div className="flex justify-center">
        <Image src={slide01} alt="image" className="object-cover h-40 w-40" />
      </div>
      <div className="mb-5">
        <label htmlFor="1">Số điện thoại</label>
        <input
          type="text"
          className="bg-[#F4F5FC] w-full h-12 rounded-lg outline-none p-2"
        />
      </div>
      <div className="mb-10">
        <label htmlFor="1">Mật khẩu</label>
        <input
          type="text"
          className="bg-[#F4F5FC] w-full h-12 rounded-lg outline-none p-2"
        />
      </div>
      <p className="text-right text-blue-500">Quên mật khẩu?</p>
      <button className="font-bold text-center w-full m-0 bg-[#FE4A7A] text-white rounded-lg p-4 active:bg-pink-500 mb-6">
        Đăng nhập
      </button>
      <Divider plain>hoặc với</Divider>
      <button className=" w-full m-0 bg-[#F1F6F7] rounded-lg active:bg-gray-200 flex justify-center gap-5 p-4">
        <Image src={logoGoogle} alt="image" className="h-7 w-7" />
        <p className="font-bold m-0"> Đăng nhập với Google</p>
      </button>
      <div className="flex items-center justify-center my-4">
        <p className="m-0">chưa có tài khoản!</p>
        <h1 className="m-0 text-blue-500">Đăng ký</h1>
      </div>
    </div>
  );
};

export default User;
