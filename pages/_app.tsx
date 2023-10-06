import "styles/globals.scss";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import React from "react";

type TLayoutComponent = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<any>;
  };
};

export default function App({ Component, pageProps }: TLayoutComponent) {
  return (
    <>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <div className="pb-16 mx-auto min-h-screen">
            <Component {...pageProps} />
          </div>
        </Component.PageLayout>
      ) : (
        <div className="pb-16">
          <Component {...pageProps} />
        </div>
      )}
    </>
  );
}
