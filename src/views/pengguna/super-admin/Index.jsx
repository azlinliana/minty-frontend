import Table from "react-bootstrap/Table";

function IndexSuperAdmin() {
  return (
    <>
      <div className="pageTitle">
        <h1>Senarai Super Admin</h1>
      </div>

      <div className="tableSection">
        <div className="tambahBtnPlacement">{/* <CreateDimensi /> */}</div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Id Kakitangan</th>
              <th>Nama Kakitangan</th>
              <th>Jawatan Kakitangan</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody></tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexSuperAdmin;
