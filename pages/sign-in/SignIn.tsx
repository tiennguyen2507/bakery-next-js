import Cookies from "js-cookie";
import { FormSignIn } from "./_components";
import styles from "./SignIn.module.css";
import Link from "next/link";
import { FunctionComponent } from "react";

const SignIn: FunctionComponent = () => {
  const router = useRouter();
  useEffect(() => {
    const tokenCookie = Cookies.get("token");
    if (tokenCookie) {
      router.push("/user");
    }
  }, [router]);
  return (
    <>
      <FormSignIn />
      <BaseFlexBox gap={4} className={styles.footer} align="center">
        <BaseTypography>chưa có tài khoản!</BaseTypography>
        <Link href="/sign-up">
          <BaseTypography color="white" className={styles.signUp}>
            Đăng ký
          </BaseTypography>
        </Link>
      </BaseFlexBox>
    </>
  );
};

export default SignIn;
