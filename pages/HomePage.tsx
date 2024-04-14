import styles from "./HomePage.module.css";
import SliderImage from "components/ui/SliderImage";
import { products, settingsSlider, sliderData } from "./HomePage.constant";
import Card from "components/ui/Card";
import Container from "components/Container";

const HomePage: React.FC = () => {
  return (
    <>
      <SliderImage options={settingsSlider}>
        {sliderData.map(({ src, srcSP }, key) => (
          <picture key={key}>
            <source media="(max-width:480px)" srcSet={srcSP} />
            <img src={src} alt="Flowers" style={{ width: "100%" }} />
          </picture>
        ))}
      </SliderImage>
      <Container className={styles.product}>
        {products.map((product, key) => (
          <Card data={product} key={key} />
        ))}
      </Container>
    </>
  );
};

export default HomePage;
