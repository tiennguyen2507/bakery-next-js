import withLayoutDefault from "layout/withLayoutDefault";
import TopSignUp from "./elements/TopSignUp";
import FormSignUp from "./elements/FormSignUp";
import BottomSignUp from "./elements/BottomSignUp";
import { PageConfig } from "config/configPage";
import { FunctionComponent } from "react";

const User: FunctionComponent = () => {
  return (
    <div className="p-4 pt-10">
      <TopSignUp />
      <FormSignUp />
      <BottomSignUp />
    </div>
  );
};

export default PageConfig({
  page: User,
  layout: withLayoutDefault,
});
