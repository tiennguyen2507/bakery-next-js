import Image from "next/image";
import styles from "./FooterMainInfo.module.css";
import { resources } from "constants/resources";

const FooterMainInfo: FC = () => {
  return (
    <BaseFlexBox justify="space-between" className={styles.wrapper}>
      <div>
        <BaseTypography color="white" size={11}>
          @ CÔNG TY TNHH FASTECH ASIA
        </BaseTypography>
        <BaseTypography color="white" size={11}>
          Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp
          do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.
        </BaseTypography>
      </div>
      <BaseFlexBox gap={16} align="center">
        <Image alt="HANDLE_CERT" src={resources.HANDLE_CERT} width={70} />
        <Image alt="DMCA_PROTECTED" src={resources.DMCA_PROTECTED} width={70} />
        <Image alt="COOLMATE_INFO" src={resources.COOLMATE_INFO} width={30} />
        <Image alt="LOGOSALENOTI" src={resources.LOGOSALENOTI} width={100} />
      </BaseFlexBox>
    </BaseFlexBox>
  );
};

export default FooterMainInfo;
