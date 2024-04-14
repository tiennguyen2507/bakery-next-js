import FooterMainInfo from "../FooterMainInfo";
import FooterMainLink from "../FooterMainLink";
import FooterMainTop from "../FooterMainTop";
import styles from "./FooterMain.module.css";

const FooterMain: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <FooterMainTop />
      <FooterMainLink />
      <FooterMainInfo />
    </footer>
  );
};

export default FooterMain;
