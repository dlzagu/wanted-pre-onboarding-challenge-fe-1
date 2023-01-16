import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/fonts/fonts.css";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      staleTime: 1000 * 60 * 3,
      useErrorBoundary: true,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if(error instanceof AxiosError ){
        toast.error(`Something went wrong: ${error.message}`)
      }
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
