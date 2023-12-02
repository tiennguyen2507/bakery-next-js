import Image from "next/image";
import slide01 from "assets/slide01.jpg";
import { ListCake } from "types/cake.type";
import { PageConfig } from "config/configPage";
import Category from "./__components/Category";
import Selling from "./__components/Selling";
import { FunctionComponent } from "react";
import styles from "./HomePage.module.css";

type homePageProps = {
  listCake: ListCake;
};

const App: FunctionComponent<homePageProps> = ({ listCake }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnail}>
        <img
          src="https://res.cloudinary.com/daqwg8oql/image/upload/v1700398875/bakery/banh-bong-lan-trung-muoi_xntoos.webp"
          alt="slide"
          className={styles.slide}
        />
        {/* <Category /> */}
      </div>
      {listCake && <Selling data={listCake} />}
    </div>
  );
};

export default PageConfig({
  page: App,
});
