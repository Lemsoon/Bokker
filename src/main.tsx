import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./Routes/Root.tsx";
import "./index.css";
import { BookProvider } from "./context/ContextProvider.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./Routes/ErrorPage.tsx";
import { Home } from "./Routes/Home.tsx";
import { SearchPage } from "./Routes/SearchPage.tsx";
import { BookPage } from "./Routes/BookPage.tsx";
import { FavoriteBooks } from "./Routes/FavoriteBooks.tsx";

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
        errorElement: <>Error loading Search Page</>,
      },
      {
        path: `/works/:bookId`,
        element: <BookPage />,
        errorElement: <>Error loading book page</>,
      },
      {
        path: "/favorite_books",
        element: <FavoriteBooks></FavoriteBooks>,
        errorElement: <>Error loading favorites Page</>,
      },
      {
        path: "/favorite_authors",
        element: <></>,
        errorElement: <>Error loading authors Page</>,
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
