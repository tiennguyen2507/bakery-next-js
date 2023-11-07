import BaseButton from "components/atoms/BaseButton";
import Cookies from "js-cookie";
import Layout from "layout/withLayoutUser";
import withPermission from "middleware/withPermission";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const User: FunctionComponent = () => {
  const router = useRouter();
  const onLogOut = (): void => {
    Cookies.remove("token");
    router.push("/sign-in");
  };
  return (
    <section className="p-4">
      <p>Trang thông tin của bạn!</p>
      <BaseButton label="Đăng xuất" className="w-full" onClick={onLogOut} />
    </section>
  );
};

const withLayoutUser = Layout(User);
export default withPermission(withLayoutUser);
