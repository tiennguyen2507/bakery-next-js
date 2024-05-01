import BaseTable from "components/ui/BaseTable";
import React from "react";
import { ProductsProps } from "./index.page";

const Products: React.FC<ProductsProps> = ({ list }) => {
  const columns = [
    { name: "title", key: "title", width: "200px" },
    { name: "description", key: "description" },
    { name: "price", key: "price" },
    { name: "sales", key: "sales" },
    { name: "category", key: "category" },
    { name: "image", key: "image1" },
    { name: "subImage", key: "subImage1" },
  ];

  return (
    <div>
      <BaseTable columns={columns} dataSource={list} />
    </div>
  );
};

export default Products;
