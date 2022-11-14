import "../styles/globals.scss";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <SideBar />
      <div className="pb-16">
        <Component {...pageProps} />
      </div>
    </>
  );
}
