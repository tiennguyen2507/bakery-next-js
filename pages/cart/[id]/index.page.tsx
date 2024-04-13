import { getOneCakeApi } from "api/cake.api";
import { GetServerSideProps } from "next";
import { PageConfig } from "config/configPage";
import Product from "./CardId";
import DefaultLayout from "components/layout/DefaultLayout";

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
}) => {
  const cake = await getOneCakeApi(req.cookies["token"], params?.id);
  return { props: { cake } };
};

export default PageConfig({
  page: Product,
  layout: DefaultLayout,
});
