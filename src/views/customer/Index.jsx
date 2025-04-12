import SearchCustomer from "./Search";
import { Row, Col, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import Table from "./Table";

export default function IndexCustomer() {
  return (
    <>
      <div className="page-title">
        <Row>
          <Col xs={12} lg={10}>
            <h1>List of Customers</h1>
          </Col>
          <Col xs={12} lg={2}>
            <Button className="create-btn"><span><FaPlus/> Add new record</span></Button>
          </Col>
        </Row>
        
      </div>
      <div>
        <SearchCustomer />
      </div>
      <div className="table-container">
        <Table/>
      </div>
    </>
  );
}
