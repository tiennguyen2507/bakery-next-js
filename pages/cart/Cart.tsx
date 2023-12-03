import React, { FunctionComponent } from "react";
import { useCartApi } from "api/cart.api";
import { PageConfig } from "config/configPage";
import { useQuery } from "react-query";
import styles from "./Cart.module.css";
import CartItem from "./_components/CartItem/CartItem";

const Cart: FunctionComponent = () => {
  const cartApi = useCartApi();
  const { data: cart, isLoading } = useQuery({
    queryFn: () =>
      cartApi
        .getAll()
        .then((res) => res.data)
        .catch(() => []),
    queryKey: ["get-cart"],
  });
  return (
    <div className={styles.wrapper}>
      <BaseTypography size="32px" weight={500} className={styles.title}>
        Order của tôi
      </BaseTypography>
      {!isLoading ? (
        cart?.map((data) => <CartItem data={data} />)
      ) : (
        <BaseLoading className={styles.loading} />
      )}
      <BaseFlexBox justify="space-between" align="center">
        <div>
          <BaseTypography size="20px">Mã giảm giá:</BaseTypography>
          <BaseTypography size="16px">hiện không có mã nào!</BaseTypography>
        </div>
        <BaseFlexBox align="end" gap={8}>
          <BaseTypography size="20px" weight={500}>
            Tổng:
          </BaseTypography>
          <BaseTypography size="16px">3.000.000vnd</BaseTypography>
        </BaseFlexBox>
      </BaseFlexBox>
      <BaseButton
        label="Thanh toán"
        className={styles.btnPay}
        disabled={!cart?.length}
      />
    </div>
  );
};

export default PageConfig({
  page: Cart,
});
