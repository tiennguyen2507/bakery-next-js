import Image from "next/image";
import Link from "next/link";
import logo from "assets/logo.png";
import styles from "./Header.module.css";

const Header = (): JSX.Element => {
  return (
    <BaseFlexBox
      align="center"
      justify="space-between"
      className={styles.wrapper}
    >
      <Link href="/" className={styles.logo}>
        <Image src={logo} alt="log" height={50} />
      </Link>
      <BaseFlexBox gap={24}>
        <Link href="/cart" className={styles.buttonIcon}>
          <BaseIcon name="cart" size="20px" color="white" />
        </Link>
        <Link href="/user" className={styles.buttonIcon}>
          <BaseIcon name="user" size="24px" color="white" cursorPointer />
        </Link>
      </BaseFlexBox>
    </BaseFlexBox>
  );
};

export default Header;
