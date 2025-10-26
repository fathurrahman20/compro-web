import MainLayout from "@/components/layout/MainLayout";
import ProtectedRoute from "@/components/protected-route";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import DashboardPage from "@/pages/Dashboard";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import NotFoundPage from "@/pages/NotFound";
import ServicesPage from "@/pages/Services";
import { createBrowserRouter } from "react-router";

const routerList = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default routerList;
