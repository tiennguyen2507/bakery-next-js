import { GetServerSideProps } from "next";
import { PageConfig } from "config/configPage";
import { userAuthGsspApi } from "api/auth.api";
import UserProfile from "./UserProfile";
import DefaultLayout from "layout/DefaultLayout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { authGetInfo } = userAuthGsspApi(context);
  try {
    const userInfo = await authGetInfo();
    return { props: { user: userInfo.data } };
  } catch (error) {
    return { props: {} };
  }
};

const UserProfilePage = UserProfile;

export default PageConfig({
  page: UserProfilePage,
  layout: DefaultLayout,
});
