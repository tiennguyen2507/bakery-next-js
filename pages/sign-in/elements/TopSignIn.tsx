import BaseTypography from "components/atoms/BaseTypography";
import slide01 from "assets/cakeVector.png";
import Image from "next/image";

const TopSignIn = (): JSX.Element => {
  return (
    <>
      <div className="text-center m-2">
        <BaseTypography className="text-2xl mb-1">
          Chào mừng bạn đã đến với
        </BaseTypography>
        <BaseTypography className="text-5xl font-bold m-0">
          Tiệm Bánh Kem
        </BaseTypography>
      </div>
      <div className="flex justify-center">
        <Image src={slide01} alt="image" className="object-cover h-40 w-40" />
      </div>
    </>
  );
};

export default TopSignIn;
