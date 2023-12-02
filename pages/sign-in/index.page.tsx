import SignIn from "./SignIn";
import { GetServerSideProps } from "next";
import { PageConfig } from "config/configPage";
import AuthLayout from "layout/AuthLayout";

const SignInPage = SignIn;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies["token"];
  if (token) {
    return {
      redirect: {
        destination: "/user",
      },
      props: {},
    };
  }
  return { props: { a: 5 } };
};

export default PageConfig({
  page: SignInPage,
  layout: AuthLayout,
});
