import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Loading from "./components/sninner_loading/Sninner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
      retry: 2,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RecoilRoot>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </RecoilRoot>
    </React.StrictMode>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
