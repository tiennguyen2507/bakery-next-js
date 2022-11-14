import React from "react";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="my-4">
      <h2 className="text-[#59519D]">Danh mục</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="h-20 bg-[#F6F8FA] rounded-xl flex items-center gap-2 p-2">
          <div className="w-14 h-14 rounded-xl bg-gray-500"></div>
          <div>
            <h3 className="m-0">Bánh kem</h3>
            <p className="text-[#A2A8AC] m-0">title</p>
          </div>
        </div>
        <div className="h-20 bg-[#F6F8FA] rounded-xl flex items-center gap-2 p-2">
          <div className="w-14 h-14 rounded-xl bg-gray-500"></div>
          <div>
            <h3 className="m-0">Bánh kem</h3>
            <p className="text-[#A2A8AC] m-0">title</p>
          </div>
        </div>{" "}
        <div className="h-20 bg-[#F6F8FA] rounded-xl flex items-center gap-2 p-2">
          <div className="w-14 h-14 rounded-xl bg-gray-500"></div>
          <div>
            <h3 className="m-0">Bánh kem</h3>
            <p className="text-[#A2A8AC] m-0">title</p>
          </div>
        </div>{" "}
        <div className="h-20 bg-[#F6F8FA] rounded-xl flex items-center gap-2 p-2">
          <div className="w-14 h-14 rounded-xl bg-gray-500"></div>
          <div>
            <h3 className="m-0">Bánh kem</h3>
            <p className="text-[#A2A8AC] m-0">title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
