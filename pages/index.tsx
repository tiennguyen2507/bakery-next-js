import { Carousel } from "antd";
import Image from "next/image";
import slide01 from "../assets/slide01.jpg";
import slide02 from "../assets/slide02.jpg";
import slide03 from "../assets/slide03.jpg";
import Category from "../components/home-component/Category";
import Selling from "../components/home-component/Selling";

type TProps = {};

export default function App({}: TProps) {
  return (
    <div className="container mx-auto p-4 rounded-2xl">
      <Carousel className="rounded-2xl">
        <Image src={slide01} alt="image" className="object-cover h-96" />
        <Image src={slide02} alt="image" className="object-cover h-96" />
        <Image src={slide03} alt="image" className="object-cover h-96" />
      </Carousel>
      <Category />
      <Selling />
    </div>
  );
}
