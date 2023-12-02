import { formatMoney } from "lib";
import Link from "next/link";
import { FunctionComponent } from "react";
import { ListCake } from "types/cake.type";

type Props = {
  data: ListCake;
};

const Selling: FunctionComponent<Props> = ({ data }) => {
  return (
    <div className="my-4 ">
      <h2 className="text-[#59519D]">Bán chạy</h2>
      <div className="rounded-xl">
        {data?.map(({ title, description, image, price, id, size }: any) => {
          return (
            <Link href={`cart/${id}`} key={id}>
              <div
                className="bg-[#F6F8FA] mb-4 rounded-xl items-start gap-4 p-2 relative shadow-lg
               cursor-pointer"
              >
                <img src={image} alt="cake-image" width={200} />
                <div className="flex-grow">
                  <BaseTypography size="16px" weight={500} color="woodsmoke">
                    {title}
                  </BaseTypography>
                  <BaseTypography color="woodsmoke" className="line-clamp-2">
                    {description}
                  </BaseTypography>
                  <BaseTypography>Kích thước: {size}</BaseTypography>
                  <BaseTypography color="venetian-red">
                    Giá:{formatMoney(price)}
                  </BaseTypography>
                </div>
                <div className="absolute bottom-3 right-3">
                  <button className="px-4 py-2 bg-[#FE4A7A] text-white rounded-full active:bg-pink-500">
                    mua ngay
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Selling;
