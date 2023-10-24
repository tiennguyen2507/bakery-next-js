import Image from "next/image";
import React, { FunctionComponent } from "react";
import { formatMoney } from "lib";
import { listCard } from "mock/product";
import withLayoutUser from "layout/withLayoutUser";

const Cart: FunctionComponent = () => {
  return (
    <div className="p-4">
      <h2 className="text-[#59519D] font-bold text-center py-4">
        Order của tôi
      </h2>
      {listCard.map(({ image, price, name, size, taste, amount }, index) => {
        return (
          <div key={index}>
            <div
              className="bg-[#F6F8FA] mb-4 rounded-xl flex items-start gap-4 p-2 relative shadow-lg cursor-pointer active:bg-slate-100"
              key={index}
            >
              <Image
                src={image}
                alt="img"
                className="w-28 h-28 rounded-xl object-cover"
              ></Image>
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="m-0 text-xl">{name}</h3>
                  <h4 className="m-0 text">{formatMoney(price)}</h4>
                </div>
                <p className="text-[#A2A8AC] m-0">Mùi vị: {taste}</p>
                <p className="text-[#A2A8AC] m-0">Kích thước: {size}</p>
                <h4 className="m-0 text-lg text-red-700">
                  {formatMoney(price * amount)}
                </h4>
              </div>
              <div className="absolute bottom-3 right-3 flex items-center gap-1">
                <button className="px-3 py-1 bg-[#FE4A7A] text-white rounded-xl active:bg-pink-500">
                  +
                </button>
                <p className="m-0 text-lg font-bold">{amount}</p>
                <button className="px-3 py-1 bg-[#FE4A7A] text-white rounded-xl active:bg-pink-500">
                  -
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div
        className="bg-[#F6F8FA] my-6 rounded-xl relative 
      shadow-lg cursor-pointer active:bg-slate-100 p-4"
      >
        <h2 className="font-bold text-center w-full m-0 bg-[#59519D] text-white rounded-3xl p-2">
          Mã giảm giá
        </h2>
        <p className="text-center text-gray-400 m-0 p-4">
          hiện không có mã nào!
        </p>
      </div>
      <div
        className="bg-[#F6F8FA] my-6 rounded-xl relative 
      shadow-lg cursor-pointer active:bg-slate-100 p-4"
      >
        <div className="flex mb-3">
          <h2 className="font-bold  w-full m-0 rounded-3xl">Tổng:</h2>
          <p className=" text-gray-400 m-0">3.000.000vnd</p>
        </div>
        <div className="flex">
          <h2 className="font-bold  w-full m-0 rounded-3xl">Mã giảm giá:</h2>
          <p className=" text-gray-400 m-0">0vnd</p>
        </div>
        <div className="flex">
          <h2 className="font-bold  w-full m-0 rounded-3xl">Tổng cộng:</h2>
          <p className=" m-0 text-lg text-red-700 font-bold">3.000.000vnd</p>
        </div>
      </div>

      <button className="font-bold text-center w-full m-0 bg-[#FE4A7A] text-white rounded-3xl p-2 active:bg-pink-500">
        Thanh toán
      </button>
    </div>
  );
};

export default withLayoutUser(Cart);
