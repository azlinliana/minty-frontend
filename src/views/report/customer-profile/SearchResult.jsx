import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

function SearchResultCustomerFinancial({
  sahabatData,
  sahabatId,
  pembiayaanSahabats,
  selectedSkimPembiayaan,
}) {
  // ______________________________ Hook Declaration ______________________________
  const navigate = useNavigate();
  
  // _____________________________ Frontend & Backend _____________________________
  // Navigate to profil sahabat along with sahabat and pembiayaan data
  const clickLihatPembiayaan = () => {
    navigate("/customer-profile-report");
  };

  // ___________________________________ Backend __________________________________
  // Filter pembiayaanSahabats based on selectedSkimPembiayaan
  // const filteredPembiayaanSahabats = pembiayaanSahabats.filter(
  //   (pembiayaan) => pembiayaan.namaSkimPembiayaan  === selectedSkimPembiayaan
  // );

  return (
    <>
      <div>
        <div className="page-title">
          <h1>Customer Profile List Financial</h1>
        </div>

        <div>
          <h3>
            Search Result: Fund Name
            {/* {selectedSkimPembiayaan} */}
          </h3>
          <hr />
        </div>

        <div>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>No.</th>
                <th>Status</th>
                <th>Fund Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
              </tr>
            </thead>
            
            <tbody>
              {/* {filteredPembiayaanSahabats.map(
                (pembiayaanSahabatsData, index) => ( */}
                  <tr 
                    // key={index}
                  >
                    <td>No.</td>
                    <td>Financial Status</td>
                    <td>Scheme Name</td>
                    <td>
                      {/* <time dateTime={pembiayaanSahabatsData.tarikhMula}>
                        {new Date(
                          pembiayaanSahabatsData.tarikhMula
                        ).toLocaleDateString("en-GB")}
                      </time> */}
                      Start Date
                    </td>
                    <td>
                      {/* <time dateTime={pembiayaanSahabatsData.tarikhTamat}>
                        {new Date(
                          pembiayaanSahabatsData.tarikhTamat
                        ).toLocaleDateString("en-GB")}
                      </time> */}
                      End Date
                    </td>
                    <td>
                      <Button
                        className="view-skim-pembiayaan-sahabat-btn"
                        onClick={() =>
                          clickLihatPembiayaan()
                        }
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                {/* )
              )} */}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default SearchResultCustomerFinancial;
