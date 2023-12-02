import Link from "next/link";
import styles from "./SignUp.module.css";
import { FormSignUp } from "./_components";

const SignUp: FunctionComponent = () => {
  return (
    <>
      <FormSignUp />
      <BaseFlexBox gap={4} align="center" className={styles.footer}>
        <BaseTypography>Đã có tài khoản!</BaseTypography>
        <Link href="/sign-in">
          <BaseTypography color="white" className={styles.signIn}>
            Đăng nhập
          </BaseTypography>
        </Link>
      </BaseFlexBox>
    </>
  );
};

export default SignUp;
