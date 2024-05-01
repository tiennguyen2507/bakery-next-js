import styles from "./DashboardLayout.module.css";

const DefaultLayout = <P extends object>(Component: FunctionComponent<P>) => {
  const Layout: FunctionComponent<P> = (props) => (
    <div className={styles.root}>
      <SideBar />
      <div className={styles.content}>
        <Component {...props} />
      </div>
    </div>
  );

  return Layout;
};

export default DefaultLayout;
