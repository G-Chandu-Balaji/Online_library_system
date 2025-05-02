import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Book_Details from "./Pages/Book_Details.jsx";
import Browse_Books from "./Pages/Browse_Books.jsx";
import Home from "./Pages/Home.jsx";
import Error from "./Pages/404_Error.jsx";
import Add_Book from "./Pages/Add_Book.jsx";
import Book_Category from "./Pages/Book_Category.jsx";

import Error_book from "./components/Error_book.jsx";
import Error_Category from "./components/Error_Category.jsx";

const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Browse_Books",
        element: <Browse_Books />,
      },
      {
        path: "/books/:category",
        element: <Book_Category />,
        errorElement: <Error_Category />,
      },

      {
        path: "/Book/:bookId",
        element: <Book_Details />,
        errorElement: <Error_book />,
      },
      {
        path: "/Add_Book",
        element: <Add_Book />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
