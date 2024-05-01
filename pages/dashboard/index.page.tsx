import { GetServerSideProps } from "next";
import { PageConfig } from "config/configPage";
import Dashboard from "./Dashboard";
import DashboardLayout from "components/layout/DashboardLayout";

const DashboardPage = Dashboard;

export const getServerSideProps: GetServerSideProps<any> = async () => {
  return { props: {} };
};

export default PageConfig({
  page: DashboardPage,
  layout: DashboardLayout,
});
