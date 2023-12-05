import "styles/index.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStateProvider from "provider/globalState";
import { Suspense } from "react";
import LoadingRouter from "config/LoadingRouter";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      <GlobalStateProvider>
        <Suspense fallback={"...loading"}>
          <LoadingRouter>
            <Component {...pageProps} />
          </LoadingRouter>
        </Suspense>
      </GlobalStateProvider>
    </QueryClientProvider>
  );
}
