import withLayoutDefault from "layout/withLayoutDefault";
import TopSignIn from "./elements/TopSignIn";
import FormSignIn from "./elements/FormSignIn";
import BottomSignIn from "./elements/BottomSignIn";

const User = (): JSX.Element => {
  return (
    <div className="p-4 pt-10">
      <TopSignIn />
      <FormSignIn />
      <BottomSignIn />
    </div>
  );
};

export default withLayoutDefault(User);
