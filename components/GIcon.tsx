import React, { FC, ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

const GIcon: FC<TProps> = ({ children }) => {
  return (
    <button className="active:bg-blue-50 rounded-full w-12 h-12 flex justify-center items-center">
      {children}
    </button>
  );
};

export default GIcon;
