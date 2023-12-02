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
      <Link href="/user">
        <BaseFlexBox
          justify="center"
          align="center"
          className={styles.buttonIcon}
        >
          <BaseIcon
            name="menu"
            className="text-gray-500"
            color="grey-blue-85"
          />
        </BaseFlexBox>
      </Link>
      <Link href="/">
        <Image src={logo} alt="log" height={50} />
      </Link>
      <Link href="/cart">
        <BaseFlexBox
          justify="center"
          align="center"
          className={styles.buttonIcon}
        >
          <BaseIcon
            name="cart"
            className="text-gray-500"
            color="grey-blue-85"
          />
        </BaseFlexBox>
      </Link>
    </BaseFlexBox>
  );
};

export default Header;
