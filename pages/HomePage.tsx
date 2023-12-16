import { ListCake } from "types/cake.type";
import { PageConfig } from "config/configPage";
import Selling from "./__components/HomeProducts";
import styles from "./HomePage.module.css";
import { trpc } from "config/server/trpc";

type homePageProps = { listCake: ListCake };

const App: FC<homePageProps> = ({ listCake }) => {
  const { data, refetch } = trpc.hello.useQuery();
  const callApi = async () => {};
  useEffect(() => {
    callApi();
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnail}>
        <img
          src="https://res.cloudinary.com/daqwg8oql/image/upload/v1700398875/bakery/banh-bong-lan-trung-muoi_xntoos.webp"
          alt="slide"
          className={styles.slide}
        />
      </div>
      {listCake.length > 0 && (
        <div className={styles.products}>
          <Selling data={listCake} title="Bán chạy" />
        </div>
      )}
    </div>
  );
};

export default PageConfig({
  page: App,
});
