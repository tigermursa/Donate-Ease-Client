import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/layouts/Home";
import DonationPosts from "../pages/DonationPosts";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import DonationsDetails from "@/pages/DonationsDetails";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import PieChart from "@/pages/PieChart";
import PrivateRoute from "@/components/layouts/PrivateRoute";
import DonationTable from "@/pages/Dashboard/DonationTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "donations",
        element: <DonationPosts />,
      },
      {
        path: "donations/details/:id",
        element: <DonationsDetails />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <PieChart />,
      },
      {
        path: "all-donations",
        element: <DonationTable />,
      },
      {
        path: "chart",
        element: <PieChart />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;