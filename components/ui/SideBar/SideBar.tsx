import { resources } from "constants/resources";
import Image from "next/image";
import styles from "./SideBar.module.css";
import Link from "next/link";
import clsx from "clsx";

const menuList = [
  {
    id: "products",
    label: "Products",
    icon: "home",
    href: "/dashboard/products",
  },
  { id: "users", label: "Users", icon: "user", href: "/dashboard/users" },
];

const SideBar: React.FC = () => {
  const router = useRouter();
  return (
    <div className={styles.root}>
      <BaseFlexBox justify="center" className={styles.logo}>
        <Image src={resources.LOGO_O2} alt="logo" width={150} />
      </BaseFlexBox>
      <BaseFlexBox direction="column" gap={2}>
        {menuList.map(({ href, icon, id, label }) => (
          <Link
            href={href}
            key={id}
            className={clsx(
              styles.menuItem,
              router.pathname === href && styles.active
            )}
          >
            <BaseIcon name={icon} color="white" />
            <BaseTypography color="white">{label}</BaseTypography>
          </Link>
        ))}
      </BaseFlexBox>
    </div>
  );
};

export default SideBar;
