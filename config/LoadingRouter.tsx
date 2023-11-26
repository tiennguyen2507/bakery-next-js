import BaseLoading from "components/atoms/BaseLoading/BaseLoading";
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
      <div className="bg-blue-100 min-h-screen flex items-center justify-center">
        <div
          style={{ maxWidth: 500, width: "100%" }}
          className="bg-white min-h-screen flex items-center justify-center"
        >
          <BaseLoading inline />
        </div>
      </div>
    );
  }
  return <>{children}</>;
};

export default LoadingRouter;
