import MainLayout from "@/components/layout/MainLayout";
import HomePage from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default routerList;
