import "styles/index.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStateProvider from "components/provider/globalState";
import LoadingRouter from "config/LoadingRouter";
import { trpc } from "service/trpc";
import {
  QueryClient as TrpcQueryClient,
  QueryClientProvider as TrpcQueryClientProvider,
} from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(new QueryClient());
  const [trpcQueryClient] = useState(() => new TrpcQueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: "http://localhost:3000/api/trpc" })],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={trpcQueryClient}>
      <QueryClientProvider client={queryClient.current}>
        <TrpcQueryClientProvider client={trpcQueryClient}>
          <GlobalStateProvider>
            <LoadingRouter>
              <Component {...pageProps} />
            </LoadingRouter>
          </GlobalStateProvider>
        </TrpcQueryClientProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
