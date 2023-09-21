import Breadcrumb from 'react-bootstrap/Breadcrumb'

function TrackingInflowOutflow() {
  return(
    <>
      <div>
        <h1>Tracking Inflow Outflow</h1>
        
        <Breadcrumb>
          <Breadcrumb.Item href="#">Inflow/Outflow</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Maklumat Inflow/Outflow Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item active>Tracking Inflow Outflow</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div></div>
    </>
  )
}

export default TrackingInflowOutflow