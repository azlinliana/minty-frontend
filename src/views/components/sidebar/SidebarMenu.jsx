import { FaUsers } from 'react-icons/fa'
import { FaChartLine } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';

const SidebarMenu = [
  {
    title: 'Sahabat',
    path: '/inflow-outflow',
    icon: <FaUsers />,
  },

  {
    title: 'Laporan',
    path: '/laporan',
    icon: <FaChartLine />,
  },
  {
    title: 'Selenggara',
    path: '/selenggara',
    icon: <FaTools />,
  }
];

export default SidebarMenu