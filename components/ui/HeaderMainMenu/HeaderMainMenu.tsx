import { resources } from "constants/resources";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./HeaderMainMenu.module.css";
import { useGlobalState } from "components/provider/globalState";

const HeaderMainMenu: FC = () => {
  const [isShowSearch, setIsShowSearch] = useState(false);
  const { state } = useGlobalState();
  return (
    <BaseFlexBox
      align="center"
      justify="space-between"
      className={styles.wrapper}
    >
      <Link href="/" className={styles.logo}>
        <Image src={resources.LOGO} alt="log" width={76} height={50} />
      </Link>
      <BaseFlexBox gap={24} align="center">
        <BaseFlexBox
          className={styles.search}
          align="center"
          gap={8}
          // onClick={() => setIsShowSearch(true)}
        >
          <Image src={resources.SEARCH} alt="icon-search" />
          <BaseTypography className={styles.input}>
            {state.searchValue ? state.searchValue : "Tìm kiếm sản phẩm..."}
          </BaseTypography>
        </BaseFlexBox>
        <Link href="/user" className={styles.link}>
          <Image src={resources.USER_ICON} alt="log" width={30} height={30} />
        </Link>
        <Link href="/cart" className={styles.link}>
          <Image src={resources.CART_ICON} alt="log" width={24} height={30} />
        </Link>
      </BaseFlexBox>
      {/* <SearchModal
        isOpen={isShowSearch}
        onClose={() => setIsShowSearch(false)}
      /> */}
    </BaseFlexBox>
  );
};

export default HeaderMainMenu;
