import { FaUsers, FaHome, FaChartArea } from "react-icons/fa";
import { BsTools, BsPersonFillGear } from "react-icons/bs";

const SidebarMenu = [
  {
    title: "Dashboard & Reports",
    path: "/dashboard",
    icon: <FaHome />,
    roles: [1, 2, 3],
  },
  {
    title: "Customer",
    path: "/customer",
    icon: <FaUsers />,
    // subRoutes: [
    //   {
    //     title: "Customer",
    //     path: "/hasil-carian-sahabat",
    //   },
    //   {
    //     title: "Customer",
    //     path: "/tracking-inflow-outflow",
    //   },
    // ],
    roles: [1, 2, 3],
  },
  {
    title: "Report",
    path: "/report",
    icon: <FaChartArea />,
    subRoutes: [
      {
        title: "Report",
        path: "/customer-profile-list-financial",
      },
      {
        title: "Report",
        path: "/customer-profile-report",
      },
      {
        title: "Report",
        path: "/detailed-customer-profile-list-financial",
      },
      {
        title: "Report",
        path: "/detailed-customer-profile-report",
      },
      {
        title: "Report",
        path: "/report-1",
      },
      {
        title: "Report",
        path: "/report-2",
      },
    ],
    roles: [1, 2, 3],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <BsTools />,
    subRoutes: [
      {
        title: "Selenggara",
        path: "/settings",
      },
      {
        title: "Selenggara",
        path: "/inflow-code",
      },
      {
        title: "Selenggara",
        path: "/outflow-code",
      },
      {
        title: "Selenggara",
        path: "/loan",
      },
      {
        title: "Selenggara",
        path: "/relationship",
      },
    ],
    roles: [2, 3],
  },
  {
    title: "User",
    path: "/user-settings",
    icon: <BsPersonFillGear />,
    subRoutes: [
      {
        title: "User",
        path: "/admin-list",
      },
      {
        title: "User",
        path: "/super-admin-list",
      },
    ],
    roles: [3],
  },
];

export default SidebarMenu;
