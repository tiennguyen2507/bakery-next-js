import withLayoutDefault from "layout/withLayoutDefault";
import TopSignUp from "./_elements/TopSignUp";
import FormSignUp from "./_elements/FormSignUp";
import BottomSignUp from "./_elements/BottomSignUp";
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
