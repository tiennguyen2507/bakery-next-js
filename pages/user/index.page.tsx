import { GetServerSideProps } from "next";
import { PageConfig } from "config/configPage";
import UserProfile from "./UserProfile";
import DefaultLayout from "components/layout/DefaultLayout";
import useFetchServer from "hook/useFetchServer";

const UserProfilePage = UserProfile;

export default PageConfig({
  page: UserProfilePage,
  layout: DefaultLayout,
});
