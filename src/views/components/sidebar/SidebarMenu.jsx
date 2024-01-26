import { FaUsers } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { BsPersonFillGear } from "react-icons/bs";


const SidebarMenu = [
  {
    title: "Sahabat",
    path: "/carian-sahabat",
    icon: <FaUsers />,
    subRoutes: [
      {
        title: "Sahabat",
        path: "/hasil-carian-sahabat",
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
  },
  {
    title: "Selenggara",
    path: "/selenggara",
    icon: <BsTools />,
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
  {
    title: "Pengguna",
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
    ]
  }
];

export default SidebarMenu;
