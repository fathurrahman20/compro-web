import MainLayout from "@/components/layout/MainLayout";
import DashboardPage from "@/pages/Dashboard";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import { createBrowserRouter } from "react-router";

const routerList = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
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
