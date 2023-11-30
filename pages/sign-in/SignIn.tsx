import Cookies from "js-cookie";
import { BottomSignIn, FormSignIn } from "./_components";
import styles from "./SignIn.module.css";

const SignIn = (): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    const tokenCookie = Cookies.get("token");
    if (tokenCookie) {
      router.push("/user");
    }
  }, [router]);
  return (
    <BaseFlexBox align="center" className={styles.wrapper}>
      <div className={styles.thumbnail} />
      <BaseFlexBox
        direction="column"
        align="center"
        className={styles.container}
      >
        <BaseFlexBox align="center" direction="column">
          <BaseTypography size="24px">Chào mừng bạn đã đến với</BaseTypography>
          <BaseTypography size="3rem" weight={600}>
            Tiệm Bánh Kem
          </BaseTypography>
        </BaseFlexBox>
        <FormSignIn />
        <BottomSignIn />
      </BaseFlexBox>
    </BaseFlexBox>
  );
};

export default SignIn;
