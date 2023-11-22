import Image from "next/image";
import slide01 from "assets/slide01.jpg";
import Category from "components/home-component/Category";
import Selling from "components/home-component/Selling";
import withLayoutUser from "layout/withLayoutUser";
import { GetServerSideProps, NextPage } from "next";
import { ListCake } from "types/cake.type";
import { getAllCakesApi } from "api/cake.api";
import { PageConfig } from "config/configPage";

type homePageProps = {
  listCake: ListCake;
};

const App: NextPage<homePageProps> = ({ listCake }) => {
  return (
    <div className="container mx-auto p-4 rounded-2xl">
      <Image src={slide01} alt="image" className="object-cover h-96" />
      <Category />
      {listCake && <Selling data={listCake} />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const listCake = await getAllCakesApi(req.cookies["token"]);
  return {
    props: { listCake },
  };
};

export default PageConfig({
  page: App,
  layout: withLayoutUser,
});
