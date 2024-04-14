import Image from "next/image";
import React from "react";
import { commend, contacts, socialNetwork } from "./FooterMainTop.constant";
import styles from "./FooterMainTop.module.css";
import Link from "next/link";

const FooterMainTop: FC = () => (
  <BaseFlexBox justify="space-between" className={styles.wrapper}>
    <Commend />
    <Contact />
    <SocialNetwork />
  </BaseFlexBox>
);

const Commend: FC = () => (
  <div className={styles.commend}>
    <BaseTypography color="white" weight={600} size={21}>
      {commend.title}
    </BaseTypography>
    <BaseTypography
      color="white"
      size={13}
      className={styles.contactDescription}
    >
      {commend.description}
    </BaseTypography>
    <BaseButton color="blue" label="Đóng góp ý kiến" />
  </div>
);

const Contact: FC = () => (
  <BaseFlexBox direction="column" gap={4} className={styles.contact}>
    {contacts.map(({ content, icon, subContent, title }, key) => (
      <BaseFlexBox align="center" gap={15} key={key}>
        <Image alt="phone" src={icon} width={30} height={30} />
        <div>
          <BaseTypography color="white">{title}</BaseTypography>
          <BaseTypography color="white">{content}</BaseTypography>
          <BaseTypography color="white">{subContent}</BaseTypography>
        </div>
      </BaseFlexBox>
    ))}
  </BaseFlexBox>
);

const SocialNetwork: FC = () => (
  <BaseFlexBox gap={40} align="center" className={styles.socialNetwork}>
    {socialNetwork.map(({ icon, path, alt, width, height }, key) => (
      <Link href={path} key={key}>
        <Image
          alt={alt}
          src={icon}
          key={key}
          width={width}
          height={height}
          className={styles.socialImg}
        />
      </Link>
    ))}
  </BaseFlexBox>
);

export default FooterMainTop;
