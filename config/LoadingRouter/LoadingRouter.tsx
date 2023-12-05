import { PropsWithChildren } from "react";
import styles from "./LoadingRouter.module.css";

const LoadingRouter: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  const handleStart = () => setPageLoading(true);
  const handleComplete = () => setPageLoading(false);

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  if (pageLoading) {
    return (
      <BaseFlexBox align="center" justify="center" className={styles.wrapper}>
        <BaseLoading inline />
      </BaseFlexBox>
    );
  }

  return <>{children}</>;
};

export default LoadingRouter;
