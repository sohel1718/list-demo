import { lazy } from "react";

const Projects = lazy(async  () =>
  import("../pages/projects/Projects.jsx")
);

export const publicRouteList = [
    {
      path: "/",
      exact: true,
      name: "Projects",
      component: Projects,
      title: "Search Project",
    },
  ];