import BaseTable from "components/ui/BaseTable";
import React from "react";
import { ProductsProps } from "./index.page";
import { formatMoney } from "lib";

const Products: React.FC<ProductsProps> = ({ list }) => {
  const columns = [
    {
      name: "STT",
      width: "20px",
      render: (a: any, b: any, index: number) => index + 1,
    },
    { name: "title", width: "200px" },
    { name: "description" },
    {
      name: "price",
      render: (price: number) => (
        <BaseTypography color="red" size="12px">
          {formatMoney(price)}
        </BaseTypography>
      ),
    },
    { name: "sales", render: (price: number) => formatMoney(price) },
    { name: "category", key: "category" },
    {
      name: "image",
      render: (src: string) => <img src={src} alt="" width={30} />,
    },
    {
      name: "subImage",
      render: (src: string) => <img src={src} alt="" width={30} />,
    },
  ];

  return (
    <div>
      <BaseTable columns={columns} dataSource={list} />
    </div>
  );
};

export default Products;
