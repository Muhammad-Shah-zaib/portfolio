import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Navigate to={`portfolio`} />} />
        <Route
          path={`portfolio`}
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }
        />
        <Route
          path={`*`}
          element={
            <div className="flex flex-col gap-4 py-6 text-zinc-400 items-center h-screen w-screen bg-zinc-800">
              <h1 className="font-biorhyme text-5xl font-bold">404 - page</h1>
              <motion.div
                whileTap={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                <Link
                  to={`/`}
                  className="px-4 py-1 hover:bg-zinc-700 text-zinc-200 font-roboto border-zinc-600 transition-all duration-300 border-2 rounded-lg"
                >
                  Go To Porfolio
                </Link>
              </motion.div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
