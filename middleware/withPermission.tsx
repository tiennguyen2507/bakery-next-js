import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
import Cookies from "js-cookie";

const withLayoutUser = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithLayout: React.FC<P> = (props) => {
    const router = useRouter();
    const tokenCookie = Cookies.get("token");
    useEffect(() => {
      if (!tokenCookie) {
        router.push("/sign-in");
      }
    }, [tokenCookie, router]);
    return <WrappedComponent {...props} />;
  };
  return WithLayout;
};

export default withLayoutUser;
