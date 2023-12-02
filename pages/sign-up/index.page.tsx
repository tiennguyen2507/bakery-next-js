import { PageConfig } from "config/configPage";
import AuthLayout from "layout/AuthLayout";
import SignUp from "./SignUp";

const SignUpPage = SignUp;

export default PageConfig({
  page: SignUpPage,
  layout: AuthLayout,
});
