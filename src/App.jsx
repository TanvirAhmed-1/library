import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Root } from "postcss";
import Home from "./components/Home";

const App =()=>{

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root />,
    },
    {
      path: "/Home",
      element: <Home/>,
    },
  ]);

  <RouterProvider router={router} />

}
export default App;