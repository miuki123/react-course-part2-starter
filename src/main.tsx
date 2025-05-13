import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
//   {defaultOptions: {
//     queries: {
//       retry: 3,
//       gcTime: 300000, // garbage collect time if no component is using the data it will be removed.
//       staleTime: 10 * 1000, // 10s
//       // consider data fresh for x ms (No re-fetch data even refresh if data is fresh).
//       // After that it staled and re-fetch data if
//       // 1. re-connect to the internet, 2. component mount, 3. window refocused(เปลี่ยน Tab)
//       refetchOnWindowFocus: false, // re-fetch data when window is focused
//       // Some of user dont want to re-fetch data when re-focus
//       refetchOnReconnect: false, // re-fetch data when re-connect to the internet
//       refetchOnMount: false, // re-fetch data when component mount
//     },
//   },
// }

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
