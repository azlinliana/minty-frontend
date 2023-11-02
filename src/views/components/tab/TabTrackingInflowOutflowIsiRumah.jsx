import IndexTrackingInflowIsiRumah from "../../sahabat/tracking-inflow-outflow/tracking-inflow/isi-rumah/Index";
import IndexTrackingOutflowIsiRumah from "../../sahabat/tracking-inflow-outflow/tracking-outflow/isi-rumah/Index";

const TabTrackingInflowOutflowIsiRumah = [
  {
    eventKey: 'tracking-inflow',
    title: 'Inflow',
    content: <IndexTrackingInflowIsiRumah />,
  },
  {
    eventKey: 'tracking-outflow',
    title: 'Outflow',
    content: <IndexTrackingOutflowIsiRumah />,
  },
];

const defaultActiveTabKeyTrackingInflowOutflowIsiRumah = 'tracking-inflow';

export {TabTrackingInflowOutflowIsiRumah, defaultActiveTabKeyTrackingInflowOutflowIsiRumah};