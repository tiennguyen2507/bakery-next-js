import SignIn from "./SignIn";
import { GetServerSideProps } from "next";
import { PageConfig } from "config/configPage";
import AuthLayout from "components/layout/AuthLayout";

const SignInPage = SignIn;

export const getServerSideProps: GetServerSideProps<any> = async ({ req }) => {
  const token = req.cookies["token"];
  if (token) {
    return {
      redirect: { destination: "/user" },
      props: {},
    };
  }
  return { props: {} };
};

export default PageConfig({
  page: SignInPage,
  layout: AuthLayout,
});
