import React from "react";
import { formatMoney } from "lib";
import withLayoutUser from "layout/withLayoutUser";
import { getOneCakeApi } from "api/cake.api";
import { GetServerSideProps, NextPage } from "next";
import { Cake } from "types/cake.type";
import BaseTypography from "components/atoms/BaseTypography/BaseTypography";
import BaseButton from "components/atoms/BaseButton/BaseButton";
import { PageConfig } from "config/configPage";
import { useForm } from "react-hook-form";

type Props = { cake: Cake };

const Product: NextPage<Props> = ({ cake }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { size: "S", amount: 1 },
  });

  const onSubmit = (data: any): void => {
    console.log(data);
  };

  return (
    <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
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
          <PickSize control={{ name: "size", control }} />
        </div>
      </div>
      <BaseTypography weight={600} size="16px">
        Mô tả:
      </BaseTypography>
      <BaseTypography>{cake.description}</BaseTypography>
      <div className="flex justify-between">
        <CountNumber control={{ name: "amount", control }} />
        <BaseButton type="submit" label="Thêm vào giỏ hàng" />
      </div>
    </form>
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
