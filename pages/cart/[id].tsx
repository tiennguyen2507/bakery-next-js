import Image from "next/image";
import React from "react";
import Layout from "layout/Layout";
import { listCard } from "mock/product";
import { formatMoney } from "lib";

type Props = {
  user: any;
};

const Product = ({ user }: Props) => {
  return (
    <div className="p-4">
      <Image
        src={user.image}
        alt="rewfre"
        objectFit="contain"
        className="w-full h-[500px] object-cover rounded-2xl"
      />
      <h2 className="text-3xl my-2">{user.name}</h2>
      <h4 className="m-0 text-2xl text-red-700 my-2">
        {formatMoney(user.price)}
      </h4>
      <div className="mb-8">
        <p className="text-gray-400 text-xl">Kích thước</p>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-[#bbe0ca] rounded-full flex justify-center items-center">
            <p className="m-0 text-green-500 font-bold">X</p>
          </div>
          <div className="w-20 h-20 bg-[#F1F9F4] rounded-full flex justify-center items-center">
            <p className="m-0 text-green-500 font-bold">M</p>
          </div>
          <div className="w-20 h-20 bg-[#F1F9F4] rounded-full flex justify-center items-center">
            <p className="m-0 text-green-500 font-bold">L</p>
          </div>
          <div className="w-20 h-20 bg-[#F1F9F4] rounded-full flex justify-center items-center">
            <p className="m-0 text-green-500 font-bold">XL</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Mô tả:</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi iste
          similique, minus, hic dolorum quidem corporis fugit, inventore
          officiis labore mollitia cupiditate numquam iure impedit sunt expedita
          totam consequatur facilis?
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <button className="px-6 py-2 bg-[#FE4A7A] text-white rounded-xl active:bg-pink-500">
            +
          </button>
          <p className="m-0 text-lg font-bold">{1}</p>
          <button className="px-6 py-2 bg-[#FE4A7A] text-white rounded-xl active:bg-pink-500">
            -
          </button>
        </div>
        <div>
          <button className="w-56 h-16 bg-[#FE4A7A] text-white rounded-full active:bg-pink-500 text-2xl">
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

Product.PageLayout = Layout;

export default Product;

export const getServerSideProps = ({ params }: { params: any }) => {
  const resuft = listCard.find((value) => value.id === params.id);
  console.log(resuft);

  return {
    props: {
      user: resuft,
    }, // will be passed to the page component as props
  };
};
