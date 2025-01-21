import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Errorpage from "./components/Errorpage";
import ListedBooks from "./components/ListedBooks";
import Booksdatils from "./components/Booksdatils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        element: <Booksdatils></Booksdatils>,
        loader: () => fetch("./booksData.json"),
      },
      {
        path: "/About",
        element: <About></About>,
      },

      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("./booksData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
