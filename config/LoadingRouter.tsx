import BaseLoading from "components/atoms/BaseLoading/BaseLoading";
import { useRouter } from "next/router";
import React, { FunctionComponent, ReactNode } from "react";

type TypeProps = {
  children: ReactNode;
};

const LoadingRouter: FunctionComponent<TypeProps> = ({ children }) => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  if (pageLoading) {
    return (
      <BaseLoading classname="h-screen flex items-center justify-center" />
    );
  }
  return <>{children}</>;
};

export default LoadingRouter;