import Image from "next/image";
import React from "react";
import vagetable from "../../assets/vegetable.png";
import cake from "../../assets/cakeVector.png";
import nguQua from "../../assets/nguQuaVector.png";
import phaoHoa from "../../assets/phaoVector.png";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="my-4">
      <h2 className="text-[#59519D]">Danh mục</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="h-20 bg-[#F6F8FA] rounded-xl flex items-center gap-2 p-2 cursor-pointer active:bg-slate-100">
          <Image
            src={cake}
            alt="img"
            className="w-14 h-14 rounded-xl object-cover"
          ></Image>
          <div>
            <h3 className="m-0">Bánh kem</h3>
            <p className="text-[#A2A8AC] m-0">title</p>
          </div>
        </div>
        <div className="h-20 bg-[#F6F8FA] rounded-xl flex items-center gap-2 p-2 cursor-pointer active:bg-slate-100">
          <Image
            src={nguQua}
            alt="img"
            className="w-14 h-14 rounded-xl object-cover"
          ></Image>
          <div>
            <h3 className="m-0">Ngũ quả</h3>
            <p className="text-[#A2A8AC] m-0">title</p>
          </div>
        </div>
        <div className="h-20 bg-[#F6F8FA] rounded-xl flex items-center gap-2 p-2 cursor-pointer active:bg-slate-100">
          <Image
            src={phaoHoa}
            alt="img"
            className="w-14 h-14 rounded-xl object-cover"
          ></Image>
          <div>
            <h3 className="m-0">Phụ kiện</h3>
            <p className="text-[#A2A8AC] m-0">title</p>
          </div>
        </div>
        <div className="h-20 bg-[#F6F8FA] rounded-xl flex items-center gap-2 p-2 cursor-pointer active:bg-slate-100">
          <Image
            src={vagetable}
            alt="img"
            className="w-14 h-14 rounded-xl object-cover"
          ></Image>
          <div>
            <h3 className="m-0">Khác</h3>
            <p className="text-[#A2A8AC] m-0">title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
