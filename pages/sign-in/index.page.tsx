import { GetServerSideProps } from "next";
import SignIn from "./SignIn";
import { PageConfig } from "config/configPage";
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
});
