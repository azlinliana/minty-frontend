import IndexTrackingInflow from "../../sahabat/tracking-inflow-outflow/tracking-inflow/Index";
import IndexTrackingOutflow from "../../sahabat/tracking-inflow-outflow/tracking-outflow/Index";

const TabTrackingInflowOutflowData = [
  {
    eventKey: 'tracking-inflow',
    title: 'Inflow',
    content: <IndexTrackingInflow />,
  },
  {
    eventKey: 'tracking-outflow',
    title: 'Outflow',
    content: <IndexTrackingOutflow />,
  },
];

const defaultActiveTabKey = 'tracking-inflow';


export { TabTrackingInflowOutflowData, defaultActiveTabKey}