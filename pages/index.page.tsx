import { PageConfig } from "config/configPage";
import DefaultLayout from "layout/DefaultLayout";
import { GetServerSideProps } from "next";
import { getAllCakesApi } from "api/cake.api";

import HomePage from "./HomePage";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const listCake = await getAllCakesApi(req.cookies["token"]);
  return {
    props: { listCake },
  };
};

export default PageConfig({
  page: HomePage,
  layout: DefaultLayout,
});
