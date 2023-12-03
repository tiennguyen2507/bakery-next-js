import React, { FunctionComponent } from "react";
import styles from "./Cart.module.css";
import { formatMoney } from "lib";

const CartItem: FunctionComponent<{ data: any }> = ({ data }) => {
  const { image, name, price, size, amount, id } = data;
  return (
    <BaseFlexBox
      justify="space-between"
      align="center"
      key={id}
      className={styles.item}
    >
      <img src={image} alt="img" className={styles.itemImg}></img>
      <BaseTypography className="m-0 text-xl">{name}</BaseTypography>
      <BaseTypography className="m-0 text">{formatMoney(price)}</BaseTypography>
      <BaseTypography className="text-[#A2A8AC] m-0">
        Kích thước: {size}
      </BaseTypography>
      <BaseTypography className="m-0 text-lg text-red-700">
        {formatMoney(price * amount)}
      </BaseTypography>
      <BaseFlexBox gap={8} align="center">
        <button className={styles.btnCount}>
          <BaseIcon name="minus" color="white" size="8px" cursorPointer />
        </button>
        <BaseTypography weight={500}>{amount}</BaseTypography>
        <button className={styles.btnCount}>
          <BaseIcon name="plus" color="white" size="8px" cursorPointer />
        </button>
      </BaseFlexBox>
    </BaseFlexBox>
  );
};

export default CartItem;
