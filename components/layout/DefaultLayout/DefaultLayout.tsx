import styles from "./DefaultLayout.module.css";

const DefaultLayout = <P extends object>(Component: FunctionComponent<P>) => {
  const Layout: FunctionComponent<P> = (props) => (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <Component {...props} />
      </main>
      <FooterMain />
    </div>
  );

  return Layout;
};

export default DefaultLayout;
