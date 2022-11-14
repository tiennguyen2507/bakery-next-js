import Image from "next/image";
import slide01 from "../../assets/slide01.jpg";
import slide02 from "../../assets/slide02.jpg";
import slide03 from "../../assets/slide03.jpg";

const listSelling = [
  {
    name: "Bánh su kem lớn",
    taste: "mat cha",
    price: "200.000đ",
    size: "L",
    image: slide01,
  },
  {
    name: "Bánh bông lan trứng muối",
    taste: "trứng muối",
    price: "300.000đ",
    size: "M",
    image: slide02,
  },
  {
    name: "Bánh kem siêu nhân",
    taste: "bình thường",
    price: "150.000đ",
    size: "S",
    image: slide03,
  },
];

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="my-4 ">
      <h2 className="text-[#59519D]">Bán chạy</h2>
      <div className="rounded-xl">
        {listSelling.map(({ name, price, taste, image, size }, index) => {
          return (
            <div
              className="bg-[#F6F8FA] mb-4 rounded-xl flex items-start gap-4 p-2 relative shadow-lg cursor-pointer active:bg-slate-100"
              key={index}
            >
              <Image
                src={image}
                alt="img"
                className="w-32 h-32 rounded-xl object-cover"
              ></Image>
              <div className="flex-grow">
                <h3 className="m-0 text-xl h-12">{name}</h3>
                <p className="text-[#A2A8AC] m-0">Mùi vị: {taste}</p>
                <p className="text-[#A2A8AC] m-0">Kích thước: {size}</p>
                <h4 className="m-0 text-lg text-red-700">{price}</h4>
              </div>
              <div className="absolute bottom-3 right-3">
                <button className="px-4 py-2 bg-[#FE4A7A] text-white rounded-full active:bg-pink-500">
                  mua ngay
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
