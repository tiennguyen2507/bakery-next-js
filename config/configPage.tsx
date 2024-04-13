import { ComponentType, FunctionComponent } from "react";

export type TypePageConfig = {
  page: FunctionComponent<any> | ComponentType<any>;
  middleware?: Array<Function>;
  layout?: any;
};

export type TypeMiddlewareConfig = <P>(props: P) => boolean;

export const PageConfig = ({ layout, page }: TypePageConfig) => {
  return layout ? layout(page) : page;
};
