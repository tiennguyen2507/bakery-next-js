import withLayoutDefault from "layout/withLayoutDefault";
import { PageConfig } from "config/configPage";
import { FunctionComponent } from "react";
import TopSignUp from "./_components/TopSignUp";
import FormSignUp from "./_components/FormSignUp";
import BottomSignUp from "./_components/BottomSignUp";

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
