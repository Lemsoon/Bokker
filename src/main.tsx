import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./Routes/Root.tsx";
import "./index.css";
import { BookProvider } from "./context/ContextProvider.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./Routes/ErrorPage.tsx";
import { Home } from "./Routes/Home.tsx";
import { SearchPage } from "./Routes/SearchPage.tsx";

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
      {
        path: "/search",
        element: <SearchPage />,
        errorElement: <>Error Loading Search Page</>,
      },
      {
        path: "/favorite_books",
        element: <></>,
        errorElement: <>Error Loading Search Page</>,
      },
      {
        path: "/favorite_authors",
        element: <></>,
        errorElement: <>Error Loading Search Page</>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  </React.StrictMode>
);
