import { lazy } from "react";

const Projects = lazy(async  () =>
  import("../pages/projects/Projects.jsx")
);

const ContactTab = lazy(async  () =>
  import("../pages/ContactTab")
);

export const publicRouteList = [
    {
      path: "/",
      exact: true,
      name: "Projects",
      component: Projects,
      title: "Search Project",
    },
    {
      path: "/contact",
      exact: true,
      name: "Contact",
      component: ContactTab,
      title: "Be a Freelancer",
  },
  ];