import clsx from "clsx";
import styles from "./Card.module.css";

export type CardProps = {
  data: {
    thumbnail: string;
    subThumbnail: string;
    sizes: Array<string>;
    title: string;
    subTitle: string;
    price: number;
    priceCurrent: number;
  };
};

const Card: FC<CardProps> = ({ data }) => {
  const percentPriceDown =
    Math.floor(((data.price - data.priceCurrent) / data.price) * 100) || null;
  return (
    <BaseFlexBox direction="column" gap={4} className={styles.wrapper}>
      <div className={styles.cardImgContainer}>
        <img
          className={styles.cardImg}
          loading="lazy"
          src={data.thumbnail}
          alt="card-thumbnail"
        />
        <img
          loading="lazy"
          src={data.subThumbnail}
          alt="card-sub-thumbnail"
          className={clsx(styles.cardImg, styles.cardImgHover)}
        />
        <BaseFlexBox direction="column" align="center" className={styles.size}>
          <BaseTypography>Thêm nhanh vào giỏ hàng</BaseTypography>
          <BaseFlexBox gap={12}>
            {data.sizes.map((size, key) => (
              <BaseTypography className={styles.sizeItem} key={key}>
                {size}
              </BaseTypography>
            ))}
          </BaseFlexBox>
        </BaseFlexBox>
      </div>
      <BaseTypography size="16px">{data.title}</BaseTypography>
      <BaseTypography size="12px">
        {data.subTitle}/{"Xanh đen"}
      </BaseTypography>
      <BaseFlexBox gap={16} align="flex-end" justify="space-between">
        {data.price && (
          <BaseTypography size="20px">
            {data.priceCurrent.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </BaseTypography>
        )}
        {data.price && (
          <BaseTypography
            size="12px"
            color="grey-blue-80"
            className={styles.priceMain}
          >
            {data.price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </BaseTypography>
        )}

        {percentPriceDown && (
          <BaseTypography size="12px" color="red">
            -{percentPriceDown}%
          </BaseTypography>
        )}
      </BaseFlexBox>
    </BaseFlexBox>
  );
};

export default Card;
