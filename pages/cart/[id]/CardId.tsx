import { formatMoney } from "lib";
import { Cake } from "types/cake.type";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { CartApi } from "api/cart.api";
import styles from "./CardId.module.css";

type Props = { cake: Cake };

const Product: FC<Props> = ({ cake }) => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationFn: (data: Cart.AddProductInCardRequest) =>
      CartApi.addProductInCard(data),
    onSuccess: () => router.push("/cart"),
  });

  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any): void => {
    mutate({
      amount: data.amount,
      productID: (router.query.id as string) || "",
    });
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <BaseFlexBox gap={32}>
        <img
          src={cake.image}
          loading="lazy"
          alt="product-img"
          className={styles.productImg}
        />
        <BaseFlexBox direction="column" gap={12}>
          <BaseTypography size="32px" weight={600} className="mt-3">
            {cake.title}
          </BaseTypography>
          <BaseTypography weight={600} size="24px">
            {formatMoney(cake.price)}
          </BaseTypography>
          <BaseTypography weight={600} size="16px">
            Kích thước
          </BaseTypography>
          <div className="flex items-center gap-4 my-4">
            <PickSize control={{ name: "size", control }} />
          </div>
          <BaseTypography weight={600} size="16px">
            Mô tả:
          </BaseTypography>
          <BaseTypography>{cake.description}</BaseTypography>
          <CountNumber control={{ name: "amount", control }} />
          <BaseButton type="submit" label="Thêm vào giỏ hàng" />
        </BaseFlexBox>
      </BaseFlexBox>
    </form>
  );
};

export default Product;
