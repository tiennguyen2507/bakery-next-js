import withLayoutDefault from "layout/withLayoutDefault";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { TopSignIn, BottomSignIn, FormSignIn } from "./_elements";
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
