import KodInflow from '../../selenggara/kod-inflow-outflow/kod-inflow/Index'
import KodOutflow from '../../selenggara/kod-inflow-outflow/kod-outflow/Index'

const TabInflowOutflowData = [
  {
    eventKey: 'kod-inflow',
    title: 'Kod Inflow',
    content: <KodInflow />,
  },
  {
    eventKey: 'kod-outflow',
    title: 'Kod Outflow',
    content: <KodOutflow />,
  },
];

const defaultActiveTabKey = 'kod-inflow';


export { TabInflowOutflowData, defaultActiveTabKey}