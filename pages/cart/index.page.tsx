import { PageConfig } from "config/configPage";
import dynamic from "next/dynamic";
import DefaultLayout from "components/layout/DefaultLayout";

const Cart = dynamic(() => import("./Cart"), { ssr: false });

const CartPage = () => {
  return (
    <div>
      <Cart />
    </div>
  );
};

export default PageConfig({
  page: CartPage,
  layout: DefaultLayout,
});
