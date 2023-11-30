import slide01 from "assets/cakeVector.png";

const TopSignIn = (): JSX.Element => {
  return (
    <div className="text-center m-2">
      <BaseTypography size="24px" className="mb-1">
        Chào mừng bạn đã đến với
      </BaseTypography>
      <BaseTypography size="3rem" weight={600}>
        Tiệm Bánh Kem
      </BaseTypography>
    </div>
  );
};

export default TopSignIn;
