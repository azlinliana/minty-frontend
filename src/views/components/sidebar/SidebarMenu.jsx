import { FaUsers } from "react-icons/fa";
import { BsFillHouseHeartFill, BsPersonHeart, BsCoin } from "react-icons/bs";

const SidebarMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <BsFillHouseHeartFill />,
    // subRoutes: [
    //   {
    //     title: "Sahabat",
    //     path: "/hasil-carian-sahabat",
    //   },
    //   {
    //     title: "Sahabat",
    //     path: "/tracking-inflow-outflow",
    //   },
    // ],
    roles: [1, 2, 3],
  },
  {
    title: "Family",
    path: "/laporan",
    icon: <BsPersonHeart />,
    // subRoutes: [
    //   {
    //     title: "Laporan",
    //     path: "/pembiayaan-sahabat",
    //   },
    //   {
    //     title: "Laporan",
    //     path: "/profil-sahabat",
    //   },
    //   {
    //     title: "Laporan",
    //     path: "/pembiayaan-sahabat-terperinci",
    //   },
    //   {
    //     title: "Laporan",
    //     path: "/profil-sahabat-terperinci",
    //   },
    //   {
    //     title: "Laporan",
    //     path: "/search-tf01",
    //   },
    //   {
    //     title: "Laporan",
    //     path: "/search-tf01-cawangan",
    //   },
    //   {
    //     title: "Laporan",
    //     path: "/search-tf02",
    //   },
    // ],
    roles: [1, 2, 3],
  },
  {
    title: "Expenses",
    path: "/selenggara",
    icon: <BsCoin />,
    subRoutes: [
      {
        title: "Categories",
        path: "/selenggara",
      },
      {
        title: "Tracking",
        path: "/kod-inflow",
      },
      // {
      //   title: "Selenggara",
      //   path: "/kod-outflow",
      // },
      // {
      //   title: "Selenggara",
      //   path: "/dimensi",
      // },
      // {
      //   title: "Selenggara",
      //   path: "/hubungan",
      // },
    ],
    roles: [2, 3],
  },
  // {
  //   title: "Pengguna",
  //   path: "/tetapan-pengguna",
  //   icon: <BsPersonFillGear />,
  //   subRoutes: [
  //     {
  //       title: "Pengguna",
  //       path: "/senarai-admin",
  //     },
  //     {
  //       title: "Pengguna",
  //       path: "/senarai-super-admin",
  //     },
  //   ],
  //   roles: [3],
  // },
];

export default SidebarMenu;
