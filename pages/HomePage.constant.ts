import { CardProps } from "components/ui/Card";
import { Settings } from "react-slick";

export const settingsSlider: Settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

export const sliderData = [
  {
    src: "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/December2023/Homepage_Noel_copy.jpg",
    srcSP:
      "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/December2023/MOBILE_HOMEPAGE_copy.jpg",
    path: "/",
  },
  {
    src: "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/December2023/CM_banner_1920x788.png",
    srcSP:
      "https://media2.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/December2023/CM_banner_750x1308.png",
    path: "/",
  },
];

export const products: CardProps["data"][] = [
  {
    thumbnail:
      "https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/sCM006.thumb1.2.jpg",
    subThumbnail:
      "https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/CM006.thumb1.3_35.jpg",
    sizes: ["S", "M", "L"],
    title: "T-Shirt chạy bộ Care & Share",
    subTitle: "Mỏng nhẹ",
    price: 199000,
    priceCurrent: 150000,
  },
  {
    thumbnail:
      "https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/th2_CMM0218.jpg",
    subThumbnail:
      "https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2023/QD001.24_53fx.jpg",
    sizes: ["S", "M", "L"],
    title: "T-Shirt chạy bộ Care & Share",
    subTitle: "Mỏng nhẹ",
    price: 199000,
    priceCurrent: 150000,
  },
  {
    thumbnail:
      "https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/QJ002.lis4.5.jpg",
    subThumbnail:
      "https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/QJ002.lis4.6.jpg",
    sizes: ["S", "M", "L"],
    title: "T-Shirt chạy bộ Care & Share",
    subTitle: "Mỏng nhẹ",
    price: 199000,
    priceCurrent: 150000,
  },
  {
    thumbnail:
      "https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/23CMAW.QD003.2.jpg",
    subThumbnail:
      "https://media2.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/October2023/23CMAW.QD003.6.jpg",
    sizes: ["S", "M", "L"],
    title: "T-Shirt chạy bộ Care & Share",
    subTitle: "Mỏng nhẹ",
    price: 199000,
    priceCurrent: 150000,
  },
];
