import { ComponentType, FC, FunctionComponent } from "react";

export type TypePageConfig = {
  page: FunctionComponent<any>;
  middleware?: Array<Function>;
  layout?: <P extends object>(WrappedComponent: ComponentType<P>) => FC<P>;
  title?: string;
};

export type TypeMiddlewareConfig = <P>(props: P) => boolean;

export const PageConfig = ({ layout, page, title }: TypePageConfig) => {
  const haveReturnLayout = layout ? layout(page) : page;
  if (title && document) {
    document.title = title;
  }
  return haveReturnLayout;
};
