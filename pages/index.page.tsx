import { PageConfig } from "config/configPage";
import DefaultLayout from "components/layout/DefaultLayout";
import { GetServerSideProps } from "next";
import { getAllCakesApi } from "api/cake.api";
import HomePage from "./HomePage";
import { useHttpRequestCustom } from "hook/useHtttpRequest";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { get } = useHttpRequestCustom(context);

  const listCake = await getAllCakesApi(context.req.cookies["token"]);

  return {
    props: { listCake },
  };
};

export default PageConfig({
  page: HomePage,
  layout: DefaultLayout,
});
