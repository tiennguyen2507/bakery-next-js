import Cookies from "js-cookie";
import withLayoutUser from "layout/withLayoutUser";
import { GetServerSideProps } from "next";
import { PageConfig } from "config/configPage";
import { BaseIconProps } from "components/atoms/BaseIcon";
import { userAuthGsspApi } from "api/auth.api";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { authGetInfo } = userAuthGsspApi(context);
  try {
    const userInfo = await authGetInfo();
    return { props: { user: userInfo.data } };
  } catch (error) {
    return { props: {} };
  }
};

const User: React.FC = ({ user }: any) => {
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
    <>
      <div className="bg-blue-200 w-full ">
        <div className="flex flex-col items-center gap-2 px-20 mb-20">
          <div className="bg-white translate-y-1/2 p-2 rounded-full">
            <div className="w-32 h-32 rounded-full bg-red-300 " />
          </div>
        </div>
      </div>
      <BaseTypography size="20px" weight={600} color="woodsmoke" align="center">
        {user?.firstName} {user?.lastName}
      </BaseTypography>
      <div className=" p-4">
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
      </div>
    </>
  );
};

type InfoItemProps = {
  label: string;
  value: string;
  icon: BaseIconProps["name"];
};

const InfoItem = ({ label, value, icon }: InfoItemProps): JSX.Element => (
  <div className="p-2 bg-slate-100 rounded">
    <div className="flex gap-2 items-center mb-1">
      <BaseIcon name={icon} />
      <BaseTypography weight={500}>{label}</BaseTypography>
    </div>
    <BaseTypography>{value}</BaseTypography>
  </div>
);

export default PageConfig({
  page: User,
  layout: withLayoutUser,
});
