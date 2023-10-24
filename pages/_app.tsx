import BaseLoading from "components/atoms/BaseLoading";
import "styles/index.scss";
import "antd/dist/antd.css";
import React from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

type TLayoutComponent = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<any>;
  };
};

export default function App({ Component, pageProps }: TLayoutComponent) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  const renderContent = (): JSX.Element => <Component {...pageProps} />;

  if (pageLoading) {
    return (
      <BaseLoading classname="h-screen flex items-center justify-center" />
    );
  }

  return renderContent();
}
