import { GetServerSideProps } from "next";
import { PageConfig } from "config/configPage";
import DashboardLayout from "components/layout/DashboardLayout";
import Users from "./Users";

const DashboardUsersPage = Users;

export const getServerSideProps = async () => {
  return { props: {} };
};

export default PageConfig({
  page: DashboardUsersPage,
  layout: DashboardLayout,
});
