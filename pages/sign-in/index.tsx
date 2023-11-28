import withLayoutDefault from "layout/withLayoutDefault";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import TopSignIn from "./_components/TopSignIn";
import FormSignIn from "./_components/FormSignIn";
import BottomSignIn from "./_components/BottomSignIn";
import Notification from "components/molecules/Notification";
const User = (): JSX.Element => {
  const router = useRouter();
  const [isShowModal, SetIsShowModal] = useState(false);
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
      <button type="button" onClick={() => SetIsShowModal(!isShowModal)}>
        text
      </button>
      {isShowModal && <Notification isOpen={true} title="" />}
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
