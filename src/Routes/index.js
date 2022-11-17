import { lazy } from "react";

const Dashboard = lazy(async  () =>
  import("../pages/Dashboard")
);

export const publicRouteList = [
    {
      path: "/",
      exact: true,
      name: "Dashboard",
      component: Dashboard,
      title: "Dashboard",
    },
  ];