import { FaUsers } from "react-icons/fa";
import { BsBarChartLineFill, BsTools, BsPersonFillGear } from "react-icons/bs";

const SidebarMenu = [
  {
    title: "Customer",
    path: "/carian-sahabat",
    icon: <FaUsers />,
    subRoutes: [
      {
        title: "Customer",
        path: "/hasil-carian-sahabat",
      },
      {
        title: "Customer",
        path: "/tracking-inflow-outflow",
      },
    ],
    roles: [1, 2, 3],
  },
  {
    title: "Report",
    path: "/laporan",
    icon: <BsBarChartLineFill />,
    subRoutes: [
      {
        title: "Laporan",
        path: "/pembiayaan-sahabat",
      },
      {
        title: "Laporan",
        path: "/profil-sahabat",
      },
      {
        title: "Laporan",
        path: "/pembiayaan-sahabat-terperinci",
      },
      {
        title: "Laporan",
        path: "/profil-sahabat-terperinci",
      },
      {
        title: "Laporan",
        path: "/search-tf01",
      },
      {
        title: "Laporan",
        path: "/search-tf01-cawangan",
      },
      {
        title: "Laporan",
        path: "/search-tf02",
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
    path: "/tetapan-pengguna",
    icon: <BsPersonFillGear />,
    subRoutes: [
      {
        title: "Pengguna",
        path: "/senarai-admin",
      },
      {
        title: "Pengguna",
        path: "/senarai-super-admin",
      },
    ],
    roles: [3],
  },
];

export default SidebarMenu;
