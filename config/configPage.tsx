import { NextPage } from "next";
import signIn from "pages/sign-in";
import { ComponentType, FC } from "react";

export type TypePageConfig = {
  page: FC | NextPage<any>;
  middleware?: Array<Function>;
  layout?: <P extends object>(WrappedComponent: ComponentType<P>) => FC<P>;
  title?: string;
};

export type TypeMiddlewareConfig = <P>(props: P) => boolean;

export const PageConfig = ({
  layout,
  middleware,
  page,
  title,
}: TypePageConfig) => {
  const haveReturnLayout = layout ? layout(page) : page;
  if (title) {
    document.title = title;
  }
  if (middleware) {
    for (let index = 0; index < middleware.length; index++) {
      if (!middleware[index]()) {
        return signIn;
      }
    }
  }
  return haveReturnLayout;
};
