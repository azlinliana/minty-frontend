import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "../../sahabat.css";
import CreateAktiviti from "./Create";
import EditAktiviti from "./Edit";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../../components/sweet-alert/DeletionAlert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Swal from "sweetalert2";

function IndexAktiviti({sahabatId, pembiayaanId}) {
  // ----------BE----------
  // List aktiviti
  const [aktivitis, setAktivitis] = useState([]);
  const fetchAktivitis = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/aktiviti`);
      if (response.status === 200) {
        setAktivitis(response.data);
        handleAktivitisLength(response.data.length); // Disabled "SETERUSNYA" button if the aktiviti === 0
      }
       else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    }
    catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchAktivitis();
    // const interval = setInterval(() => { // Set up recurring fetch every 5 second
    //   fetchAktivitis();
    // }, 5000);
    // // Cleanup the interval when the component unmounts
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return(
    <div className="inputStepsContainer">
      <h2>Maklumat Aktiviti Sahabat</h2>

      <div className="tableSection">
        <div className="tambahBtnPlacement"><CreateAktiviti sahabatId={sahabatId} pembiayaanId={pembiayaanId} /></div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Aktiviti</th>
              <th>Keterangan Aktiviti</th>
              <th>Projek</th>
              <th>Dimensi</th>
              <th>Pengurus Dana</th>
              <th>Jumlah Pinjaman</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {aktivitis.length === 0 ? (
              <tr><td colSpan="8"><center>Tiada maklumat aktiviti untuk sahabat ini. Sila klik butang "Tambah" untuk merekodkan aktiviti baharu.</center></td></tr>
            ) : (
              aktivitis.map((aktivitisData, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{aktivitisData.aktivitiId}</td>
                  <td>{aktivitisData.keteranganAktivitiId}</td>
                  <td>{aktivitisData.projekAktivitiId}</td>
                  <td>{aktivitisData.dimensi.kodDimensi}</td>
                  <td>{aktivitisData.pengurusDanaAktiviti}</td>
                  <td>{aktivitisData.jumlahPinjamanAktiviti}</td>
                  <td>
                    <EditAktiviti />
                    <Button className="delBtn">Padam</Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default IndexAktiviti;
