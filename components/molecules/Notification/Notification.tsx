import styles from "./Notification.module.css";

export type TypeNotificationProps = {
  isOpen: boolean;
  title?: string;
};

const Notification: FunctionComponent<TypeNotificationProps> = ({ isOpen }) => {
  const router = useRouter();
  return (
    <BaseModal isOpen={isOpen} width={320} renderHeader={<></>}>
      <div className={styles.wrapper}>
        <BaseIcon name="warning" color="yellow-light" size="50px" />
        <BaseTypography size="20px" weight={600}>
          Thông báo
        </BaseTypography>
        <BaseTypography align="center">
          Bạn chưa đăng nhập hoặc phiên làm việc của bạn đã hết hạn!
        </BaseTypography>
        <BaseButton
          label="Đăng nhập"
          className={styles.btnSubmit}
          onClick={() => router.push("/sign-in")}
        />
      </div>
    </BaseModal>
  );
};

export default Notification;
