import Link from "next/link";
import {
  FooterLinkType,
  clubs,
  addressContact,
  customerCares,
  documentRecruitment,
  policy,
} from "./FooterMainLink.constant";
import styles from "./FooterMainLink.module.css";

const FooterMainLink: FC = () => {
  return (
    <div className={styles.wrapper}>
      <LinkSession data={clubs} />
      <LinkSession data={policy} />
      <LinkSession data={customerCares} />
      <LinkSession data={documentRecruitment} />
      <LinkSession data={addressContact} />
    </div>
  );
};

const LinkSession: FC<{ data: FooterLinkType }> = ({ data }) => (
  <BaseFlexBox direction="column" gap={32}>
    {data.map(({ title, children }, key) => (
      <div key={key}>
        <BaseTypography color="white" size="16px" className={styles.title}>
          {title}
        </BaseTypography>
        <BaseFlexBox direction="column" gap={10}>
          {children &&
            children.map(({ name, path }, keyChild) => (
              <Link href={path} key={keyChild}>
                <BaseTypography color="white" size="11px">
                  {name}
                </BaseTypography>
              </Link>
            ))}
        </BaseFlexBox>
      </div>
    ))}
  </BaseFlexBox>
);

export default FooterMainLink;
