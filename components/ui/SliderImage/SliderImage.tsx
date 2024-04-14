import { PropsWithChildren } from "react";
import Slider, { Settings } from "react-slick";
import styles from "./SliderImage.module.css";
import Image from "next/image";
import { resources } from "constants/resources";

type SliderImageProps = PropsWithChildren & {
  options: Settings;
};

const SliderImage: FC<SliderImageProps> = ({ options, children }) => {
  const sliderRef = useRef<Slider>(null);
  return (
    <div className={styles.wrapper}>
      <Slider {...options} ref={sliderRef} arrows={false} dots={false}>
        {children}
      </Slider>
      <BaseFlexBox direction="column" gap={24} className={styles.navigate}>
        <Image
          alt="right"
          src={resources.AROUND_LEFT}
          onClick={() => sliderRef.current?.slickPrev()}
        />
        <Image
          alt="right"
          src={resources.AROUND_RIGHT}
          onClick={() => sliderRef.current?.slickNext()}
        />
      </BaseFlexBox>
    </div>
  );
};

export default SliderImage;
