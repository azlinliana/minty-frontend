import { FaUsers } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

const SidebarMenu = [
  {
    title: "Sahabat",
    path: "/search-sahabat",
    icon: <FaUsers />,
    subRoutes: [
      {
        title: "Sahabat",
        path: "/search-result-sahabat",
      },
      {
        title: "Sahabat",
        path: "/tracking-inflow-outflow",
      },
    ],
  },
  {
    title: "Laporan",
    path: "/laporan",
    icon: <FaChartLine />,
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
  },
  {
    title: "Selenggara",
    path: "/selenggara",
    icon: <FaTools />,
    subRoutes: [
      {
        title: "Selenggara",
        path: "/selenggara",
      },
      {
        title: "Selenggara",
        path: "/kod-inflow",
      },
      {
        title: "Selenggara",
        path: "/kod-outflow",
      },
      {
        title: "Selenggara",
        path: "/dimensi",
      },
      {
        title: "Selenggara",
        path: "/hubungan",
      },
    ],
  },
];

export default SidebarMenu;
