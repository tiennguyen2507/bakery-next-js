import Link from "next/link";

const BottomSignIn = (): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-center my-4">
        <p className="m-0 font-medium">chưa có tài khoản!</p>
        <Link href="/sign-up">
          <p className="m-0 text-blue-500">Đăng ký</p>
        </Link>
      </div>
    </>
  );
};

export default BottomSignIn;
