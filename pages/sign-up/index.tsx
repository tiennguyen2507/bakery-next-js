import withLayoutDefault from "layout/withLayoutDefault";
import { PageConfig } from "config/configPage";
import { FunctionComponent } from "react";
import { BottomSignUp, FormSignUp, TopSignUp } from "./_elements";

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
