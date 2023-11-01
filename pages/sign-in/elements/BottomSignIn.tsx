import { Divider } from "antd";
import Image from "next/image";
import logoGoogle from "assets/logoGoogle.png";

const BottomSignIn = (): JSX.Element => {
  return (
    <>
      <Divider plain>
        <span className="font-bold">hoặc với</span>
      </Divider>
      <button
        className=" w-full m-0 bg-[#F1F6F7] rounded-lg 
        active:bg-gray-200 flex justify-center gap-5 p-4"
      >
        <Image src={logoGoogle} alt="image" className="h-7 w-7" />
        <p className="font-bold m-0"> Đăng nhập với Google</p>
      </button>
      <div className="flex items-center justify-center my-4">
        <p className="m-0 font-medium">chưa có tài khoản!</p>
        <h1 className="m-0 text-blue-500">Đăng ký</h1>
      </div>
    </>
  );
};

export default BottomSignIn;
