import "styles/index.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStateProvider from "provider/globalState";
import LoadingRouter from "config/LoadingRouter";
import { trpc } from "config/server/trpc";
import {
  QueryClient as TrpcQueryClient,
  QueryClientProvider as TrpcQueryClientProvider,
} from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import PerfectScrollbar from "react-perfect-scrollbar";

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
              <PerfectScrollbar>
                <Component {...pageProps} />
              </PerfectScrollbar>
            </LoadingRouter>
          </GlobalStateProvider>
        </TrpcQueryClientProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
