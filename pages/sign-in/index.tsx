import withLayoutDefault from "layout/withLayoutDefault";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import TopSignIn from "./_components/TopSignIn";
import FormSignIn from "./_components/FormSignIn";
import BottomSignIn from "./_components/BottomSignIn";
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
      {isShowModal && (
        <BaseModal
          isOpen={isShowModal}
          onClose={() => SetIsShowModal(false)}
          title="Thông báo"
        >
          hello
        </BaseModal>
      )}
      <button type="button" onClick={() => SetIsShowModal(!isShowModal)}>
        text
      </button>
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
