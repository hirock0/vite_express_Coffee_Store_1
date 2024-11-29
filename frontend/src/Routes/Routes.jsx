import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import App from "../App";
import Add_Coffee from "../Pages/Add_Coffee/Add_Coffee";
import Update_Coffee from "../Pages/Update_Coffee/Update_Coffee";
import Details_Coffee from "../Pages/Details_Coffee/Details_Coffee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/add_coffee",
        element: <Add_Coffee />,
      },
      {
        path: "/update_coffee/:id",
        element: <Update_Coffee />,
      },
      {
        path: "/details_coffee/:id",
        element: <Details_Coffee />,
      },
    ],
  },
]);
