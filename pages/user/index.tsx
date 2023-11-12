import BaseButton from "components/atoms/BaseButton";
import Cookies from "js-cookie";
import Layout from "layout/withLayoutUser";
import withPermission from "middleware/withPermission";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect } from "react";
import { GetServerSideProps } from "next";
import { getAuthInfo } from "api/auth";
import BaseTypography from "components/atoms/BaseTypography/BaseTypography";
import BaseIcon from "components/atoms/BaseIcon";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const userInfo = await getAuthInfo(req.cookies["token"]);
    return { props: { user: userInfo.data } };
  } catch (error) {
    return { props: {} };
  }
};

const User: FunctionComponent = ({ user }: any) => {
  const router = useRouter();
  const onLogOut = (): void => {
    Cookies.remove("token");
    router.push("/sign-in");
  };
  useEffect(() => {
    if (!user) {
      onLogOut();
    }
  }, []);

  if (!user) {
    return null;
  }

  return (
    <section className="p-4">
      <div className="flex flex-col items-center gap-2 px-20">
        <div className="w-32 h-32 rounded-full bg-red-300" />
        <BaseTypography size="20px" weight={600} color="woodsmoke">
          {user?.firstName} {user?.lastName}
        </BaseTypography>
      </div>
      <div className="shadow border rounded p-2 flex flex-col gap-2 my-4">
        {user?.id && <InfoItem label="ID" icon="user" value={user.id} />}
        {user?.email && (
          <InfoItem label="Email" icon="email" value={user.email} />
        )}
        {user?.created_at && (
          <InfoItem label="Ngày tạo" icon="clock" value={user.created_at} />
        )}
        {user?.updated_at && (
          <InfoItem
            label="Ngày cập nhật mới nhất"
            icon="history"
            value={user.updated_at}
          />
        )}
      </div>
      <BaseButton label="Đăng xuất" className="w-full" onClick={onLogOut} />
    </section>
  );
};

const InfoItem = ({ label, value, icon }: any) => (
  <div className="p-2 bg-slate-100 rounded">
    <div className="flex gap-2 items-center mb-1">
      <BaseIcon name={icon} />
      <BaseTypography weight={500}>{label}</BaseTypography>
    </div>
    <BaseTypography>{value}</BaseTypography>
  </div>
);

const withLayoutUser = Layout(User);
export default withPermission(withLayoutUser);
