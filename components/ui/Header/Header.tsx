import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { resources } from "constants/resources";
import { targetList, aboutList } from "./Header.constant";

const Header = (): JSX.Element => {
  return (
    <>
      <TopBar />
      <TopPromotion />
      <HeaderMainMenu />
    </>
  );
};

const TopPromotion: FC = () => (
  <BaseFlexBox align="center" justify="center" className={styles.topPromotion}>
    <BaseTypography color="white">Trải nghiệm BST Thu - Đông</BaseTypography>
  </BaseFlexBox>
);

const TopBar: FC = () => (
  <BaseFlexBox align="center" className={styles.topBar}>
    <BaseFlexBox align="center">
      {targetList.map(({ img, path, height, width, active }, key) => (
        <Link
          href={path}
          key={key}
          className={styles.topBarLink}
          data-active={active}
        >
          <Image src={img} alt="log" width={width} height={height} />
        </Link>
      ))}
    </BaseFlexBox>
    <div className={styles.info}>
      <Link href="/" className={styles.topBarLink} data-active={false}>
        <BaseTypography weight={400}>Tham gia CoolClub</BaseTypography>
        <Image src={resources.STAR} alt="log" width={17} height={17} />
      </Link>
      {aboutList.map(({ path, active, name }, key) => (
        <Link
          href={path}
          key={key}
          className={styles.topBarLink}
          data-active={active}
        >
          <BaseTypography weight={400}>{name}</BaseTypography>
        </Link>
      ))}
    </div>
  </BaseFlexBox>
);

export default Header;
