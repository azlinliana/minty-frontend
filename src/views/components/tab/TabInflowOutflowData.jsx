import IndexKodInflow from '../../selenggara/kod-inflow-outflow/kod-inflow/Index';
import IndexKodOutflow from '../../selenggara/kod-inflow-outflow/kod-outflow/Index';

const TabInflowOutflowData = [
  {
    eventKey: 'kod-inflow',
    title: 'Kod Inflow',
    content: <IndexKodInflow />,
  },
  {
    eventKey: 'kod-outflow',
    title: 'Kod Outflow',
    content: <IndexKodOutflow />,
  },
];

const defaultActiveTabKey = 'kod-inflow';


export { TabInflowOutflowData, defaultActiveTabKey}