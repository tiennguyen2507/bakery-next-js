import styles from "./AuthLayout.module.css";

const AuthLayout = <P extends object>(Component: FunctionComponent<P>) => {
  const Layout: FunctionComponent<P> = (props) => (
    <BaseFlexBox align="center" justify="center" className={styles.wrapper}>
      <BaseFlexBox
        direction="column"
        align="center"
        className={styles.container}
      >
        <BaseFlexBox align="center" direction="column">
          <BaseTypography size="24px">Chào mừng bạn đã đến với</BaseTypography>
          <BaseTypography
            size="32px"
            weight={700}
            color="red"
            className={styles.title}
          >
            Tiệm Bánh Kem
          </BaseTypography>
        </BaseFlexBox>
        <Component {...props} />
      </BaseFlexBox>
    </BaseFlexBox>
  );

  return Layout;
};

export default AuthLayout;
