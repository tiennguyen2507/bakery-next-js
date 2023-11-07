import Image from "next/image";
import slide01 from "assets/slide01.jpg";
import Category from "components/home-component/Category";
import Selling from "components/home-component/Selling";
import { FunctionComponent } from "react";
import withLayoutUser from "layout/withLayoutUser";
import { GetServerSideProps } from "next";

const App: FunctionComponent = () => {
  return (
    <div className="container mx-auto p-4 rounded-2xl">
      <Image src={slide01} alt="image" className="object-cover h-96" />
      <Category />
      <Selling />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/user",
    },
    props: {},
  };
};

export default withLayoutUser(App);
