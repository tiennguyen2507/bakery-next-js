import { GetServerSideProps } from "next";
import { PageConfig } from "config/configPage";
import DashboardLayout from "components/layout/DashboardLayout";
import Products from "./Products";

const DashboardProductsPage = Products;

export const getServerSideProps = async () => {
  return { props: {} };
};

export default PageConfig({
  page: DashboardProductsPage,
  layout: DashboardLayout,
});
