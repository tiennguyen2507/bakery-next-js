import "styles/index.scss";
import React from "react";
import type { AppProps } from "next/app";
import LoadingRouter from "config/LoadingRouter";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingRouter>
        <Component {...pageProps} />
      </LoadingRouter>
    </QueryClientProvider>
  );
}
