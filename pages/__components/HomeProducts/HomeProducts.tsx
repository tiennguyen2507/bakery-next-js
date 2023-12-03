import { formatMoney } from "lib";
import Link from "next/link";
import { FunctionComponent } from "react";
import { ListCake } from "types/cake.type";
import styles from "./HomeProducts.module.css";

type Props = {
  data: ListCake;
  title?: string;
};

const HomeProducts: FunctionComponent<Props> = ({ data, title }) => {
  return (
    <div className={styles.wrapper}>
      {title && (
        <BaseTypography
          size="30px"
          weight={500}
          className={styles.title}
          color="grey-blue-50"
        >
          {title}
        </BaseTypography>
      )}
      <div className={styles.container}>
        {data?.map(({ title, description, image, price, id, size }: any) => {
          return (
            <Link href={`cart/${id}`} key={id}>
              <div className={styles.item}>
                <img
                  src={image}
                  alt="cake-image"
                  className={styles.thumbnail}
                />
                <BaseFlexBox
                  direction="column"
                  gap={8}
                  className={styles.content}
                >
                  <BaseTypography size="24px" weight={500} color="gray-blue-50">
                    {title}
                  </BaseTypography>
                  <BaseTypography size="20px" color="gray-blue-70">
                    {description}
                  </BaseTypography>
                  <BaseTypography size="20px" color="gray-blue-70">
                    Kích thước: {size}
                  </BaseTypography>
                  <BaseFlexBox justify="space-between" align="center">
                    <BaseTypography
                      size="24px"
                      weight={500}
                      color="venetian-red"
                    >
                      Giá:{formatMoney(price)}
                    </BaseTypography>
                    <button className={styles.btnBuy}>mua ngay</button>
                  </BaseFlexBox>
                </BaseFlexBox>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeProducts;
