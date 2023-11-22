import BaseTypography from "components/atoms/BaseTypography";
import slide01 from "assets/cakeVector.png";
import Image from "next/image";

const TopSignIn = (): JSX.Element => {
  return (
    <>
      <div className="text-center m-2">
        <BaseTypography size="24px" className="mb-1">
          Chào mừng bạn đã đến với
        </BaseTypography>
        <BaseTypography size="3rem" weight={600}>
          Tiệm Bánh Kem
        </BaseTypography>
      </div>
      <div className="flex justify-center">
        <Image src={slide01} alt="image" width={160} height={160} />
      </div>
    </>
  );
};

export default TopSignIn;
