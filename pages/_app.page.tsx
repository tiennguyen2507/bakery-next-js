import "styles/index.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import GlobalStateProvider from "provider/globalState";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      <GlobalStateProvider>
        <Component {...pageProps} />
      </GlobalStateProvider>
    </QueryClientProvider>
  );
}
