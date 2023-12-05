import Cookies from "js-cookie";
import styles from "./UserProfile.module.css";

const UserProfile: React.FC = ({ user }: any) => {
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
    <BaseFlexBox
      direction="column"
      align="center"
      justify="center"
      gap={12}
      className={styles.wrapper}
    >
      <BaseTypography size="20px" weight={600} color="woodsmoke" align="center">
        {user?.firstName} {user?.lastName}
      </BaseTypography>
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
      <BaseButton
        label="Đăng xuất"
        className={styles.btnLogOut}
        onClick={onLogOut}
      />
    </BaseFlexBox>
  );
};

type InfoItemProps = {
  label: string;
  value: string;
  icon: string;
};

const InfoItem = ({ label, value, icon }: InfoItemProps): JSX.Element => (
  <div className={styles.infoItem}>
    <BaseFlexBox gap={8} className={styles.infoItemLabel}>
      <BaseIcon name={icon} />
      <BaseTypography weight={500}>{label}</BaseTypography>
    </BaseFlexBox>
    <BaseTypography>{value}</BaseTypography>
  </div>
);

export default UserProfile;
