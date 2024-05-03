import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./Routes/Root.tsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./Routes/ErrorPage.tsx";
import { Home } from "./Routes/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <>Error loading home page</>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
