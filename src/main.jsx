import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Book_Details from "./components/Book_Details.jsx";
import Browser_Page from "./components/Browser_Page.jsx";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import Add_Book from "./components/Add_Book.jsx";
import Book_Category from "./components/Book_Category.jsx";

const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Browser_Page",
        element: <Browser_Page />,
      },
      {
        path: "/books/:category",
        element: <Book_Category />,
      },

      {
        path: "/Book/:bookId",
        element: <Book_Details />,
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
