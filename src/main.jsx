import "./styles/global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store/store.js";
import { Toaster } from "react-hot-toast";

import App from "./App.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(

    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
              <Toaster position="top-right" reverseOrder={false} />
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
);
