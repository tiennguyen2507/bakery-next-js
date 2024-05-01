import { InferGetServerSidePropsType } from "next";
import { PageConfig } from "config/configPage";
import DashboardLayout from "components/layout/DashboardLayout";
import Products from "./Products";
import axios from "axios";

const DashboardProductsPage = Products;

export type ProductsProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export const getServerSideProps = async () => {
  const { data } = await axios.get("https://nest-study.adaptable.app/products");
  return { props: { list: data } };
};

export default PageConfig({
  page: DashboardProductsPage,
  layout: DashboardLayout,
});
