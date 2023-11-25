import Image from "next/image";
import Link from "next/link";
import logo from "assets/logo.png";

const Header = (): JSX.Element => {
  return (
    <div
      className="bg-white sticky top-0 right-0 left-0 h-16 
    flex justify-between items-center px-5 z-50 shadow-md"
    >
      <Link href="/user">
        <BaseIcon name="menu" className="text-gray-500" />
      </Link>
      <Link href="/">
        <Image src={logo} alt="log" height={50} />
      </Link>
      <Link href="/cart">
        <BaseIcon name="cart" className="text-gray-500" />
      </Link>
    </div>
  );
};

export default Header;
