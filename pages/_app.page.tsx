import "styles/index.scss";
import type { AppProps } from "next/app";
import LoadingRouter from "config/LoadingRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStateProvider from "provider/globalState";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <GlobalStateProvider>
      <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
      </QueryClientProvider>
    </GlobalStateProvider>
  );
}
