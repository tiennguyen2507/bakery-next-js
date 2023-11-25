import Link from "next/link";

const BottomSignUp = (): JSX.Element => {
  return (
    <>
      <div className="flex items-center justify-center my-4">
        <p className="m-0 font-medium">Đã có tài khoản!</p>
        <Link href="/sign-in">
          <h1 className="m-0 text-blue-500">Đăng nhập</h1>
        </Link>
      </div>
    </>
  );
};

export default BottomSignUp;
