import { Divider } from "antd";
import Image from "next/image";
import React from "react";
import slide01 from "@/assets/cakeVector.png";
import logoGoogle from "@/assets/logoGoogle.png";
import Layout from "@/layout/index";
import BaseInput from "@/components/atoms/BaseInput/BaseInput";
import BaseButton from "@/components/atoms/BaseButton/BaseButton";
import BaseTypography from "@/components/atoms/BaseTypography";

const User = (): JSX.Element => {
  return (
    <div className="p-4">
      <div className="text-center pt-10">
        <h2>Chào mừng bạn đã đến với</h2>
        <h3 className="text-2xl font-bold">Tiệm Bánh Kem</h3>
      </div>
      <div className="flex justify-center">
        <Image src={slide01} alt="image" className="object-cover h-40 w-40" />
      </div>
      <BaseInput label="Số điện thoại" className="mb-2" />
      <BaseInput label="Mật khẩu" type="password" className="mb-2" />
      <BaseTypography className="text-right text-blue-500">
        Quên mật khẩu?
      </BaseTypography>
      <BaseButton label="Đăng nhập" className="w-full" />
      <Divider plain>hoặc với</Divider>
      <button
        className=" w-full m-0 bg-[#F1F6F7] rounded-lg 
        active:bg-gray-200 flex justify-center gap-5 p-4"
      >
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

User.PageLayout = Layout;

export default User;
