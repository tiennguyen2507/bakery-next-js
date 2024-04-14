import FooterMainInfo from "../FooterMainInfo";
import FooterMainLink from "../FooterMainLink";
import FooterMainTop from "../FooterMainTop";
import styles from "./FooterMain.module.css";

const FooterMain: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <FooterMainTop />
        <FooterMainLink />
        <FooterMainInfo />
      </Container>
    </footer>
  );
};

export default FooterMain;
