import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-16 bg-sky-400 flex justify-between items-center px-5 ">
      <span>Logo</span>
      <Link href="/about" className="text-white font-bold text-xl">
        about
      </Link>
    </div>
  );
};

export default Header;
