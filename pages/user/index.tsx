import BaseButton from "components/atoms/BaseButton";
import withLayoutUser from "layout/withLayoutUser";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const User: FunctionComponent = () => {
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

export default withLayoutUser(User);
