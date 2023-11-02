import withLayoutDefault from "layout/withLayoutDefault";
import TopSignUp from "./elements/TopSignUp";
import FormSignUp from "./elements/FormSignUp";
import BottomSignUp from "./elements/BottomSignUp";

const User = (): JSX.Element => {
  return (
    <div className="p-4 pt-10">
      <TopSignUp />
      <FormSignUp />
      <BottomSignUp />
    </div>
  );
};

export default withLayoutDefault(User);
