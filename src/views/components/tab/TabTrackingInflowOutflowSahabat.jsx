import IndexTrackingInflowSahabat from "../../sahabat/tracking-inflow-outflow/tracking-inflow/sahabat/Index";
import IndexTrackingOutflowSahabat from "../../sahabat/tracking-inflow-outflow/tracking-outflow/sahabat/Index";

const TabTrackingInflowOutflowSahabat = [
  {
    eventKey: 'tracking-inflow',
    title: 'Inflow',
    content: <IndexTrackingInflowSahabat />,
  },
  {
    eventKey: 'tracking-outflow',
    title: 'Outflow',
    content: <IndexTrackingOutflowSahabat />,
  },
];

const defaultActiveTabKeyTrackingInflowOutflowSahabat = 'tracking-inflow';

export {TabTrackingInflowOutflowSahabat, defaultActiveTabKeyTrackingInflowOutflowSahabat};