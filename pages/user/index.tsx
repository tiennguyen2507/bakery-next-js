import BaseButton from "components/atoms/BaseButton";
import Layout from "layout/Layout";
import { useRouter } from "next/router";

const User = (): JSX.Element => {
  const router = useRouter();
  const onLogOut = (): void => {
    router.push("/sign-in");
  };
  return (
    <section className="p-4">
      <p>Trang thông tin của bạn!</p>
      <BaseButton label="Đăng xuất" className="w-full" onClick={onLogOut} />
    </section>
  );
};

User.PageLayout = Layout;

export default User;
