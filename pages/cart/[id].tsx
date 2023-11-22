import React from "react";
import { formatMoney } from "lib";
import withLayoutUser from "layout/withLayoutUser";
import { getOneCakeApi } from "api/cake.api";
import { GetServerSideProps, NextPage } from "next";
import { Cake } from "types/cake.type";
import BaseTypography from "components/atoms/BaseTypography/BaseTypography";
import BaseButton from "components/atoms/BaseButton/BaseButton";
import { PageConfig } from "config/configPage";

type Props = { cake: Cake };

const Product: NextPage<Props> = ({ cake }) => {
  return (
    <div className="p-4">
      <img
        src={cake.image}
        alt="rewfre"
        className="object-cover rounded-2xl aspect-[4/3]"
      />
      <BaseTypography size="20px" weight={600} className="mt-3">
        {cake.title}
      </BaseTypography>
      <BaseTypography weight={600} size="20px" color="venetian-red">
        {formatMoney(cake.price)}
      </BaseTypography>
      <div>
        <BaseTypography weight={600} size="16px">
          Kích thước
        </BaseTypography>
        <div className="flex items-center gap-4 my-4">
          <div className="w-16 h-16 bg-[#bbe0ca] rounded-full flex justify-center items-center">
            <p className="m-0 text-green-500 font-bold">X</p>
          </div>
          <div className="w-16 h-16 bg-[#F1F9F4] rounded-full flex justify-center items-center">
            <p className="m-0 text-green-500 font-bold">M</p>
          </div>
          <div className="w-16 h-16 bg-[#F1F9F4] rounded-full flex justify-center items-center">
            <p className="m-0 text-green-500 font-bold">L</p>
          </div>
          <div className="w-16 h-16 bg-[#F1F9F4] rounded-full flex justify-center items-center">
            <p className="m-0 text-green-500 font-bold">XL</p>
          </div>
        </div>
      </div>
      <BaseTypography weight={600} size="16px">
        Mô tả:
      </BaseTypography>
      <BaseTypography>{cake.description}</BaseTypography>
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
        <BaseButton label="Thêm vào giỏ hàng" />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const cake = await getOneCakeApi(req.cookies["token"], params?.id);
  return { props: { cake } };
};

export default PageConfig({
  page: Product,
  layout: withLayoutUser,
});
