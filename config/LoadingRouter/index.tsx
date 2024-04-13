import { PropsWithChildren } from "react";
import LoadingBar from "react-top-loading-bar";
import { LoadingBarRef } from "react-top-loading-bar";

const LoadingRouter: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const ref = useRef<LoadingBarRef>(null);

  const handleStart = () => ref.current?.continuousStart();
  const handleComplete = () => ref.current?.complete();

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <LoadingBar color="#f11946" ref={ref} height={3} />
      {children}
    </>
  );
};

export default LoadingRouter;
