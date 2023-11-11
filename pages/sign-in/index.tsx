import withLayoutDefault from "layout/withLayoutDefault";
import TopSignIn from "./elements/TopSignIn";
import FormSignIn from "./elements/FormSignIn";
import BottomSignIn from "./elements/BottomSignIn";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";

const User = (): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    const tokenCookie = Cookies.get("token");
    if (tokenCookie) {
      router.push("/user");
    }
  }, [router]);
  return (
    <div className="h-screen p-4 pt-10 flex flex-col justify-center">
      <TopSignIn />
      <FormSignIn />
      <BottomSignIn />
    </div>
  );
};

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

export default withLayoutDefault(User);
