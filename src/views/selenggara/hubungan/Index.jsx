import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import CreateHubungan from './Create';
import EditHubungan from './Edit';
import DeletionAlert from '../../components/sweet-alert/DeletionAlert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Swal from 'sweetalert2';

function IndexHubungan() {
  // ----------FE----------
  const [hubungans, setHubungans] = useState([]);

  // Back button
  const navigate = useNavigate();
  const goBack = () => {navigate(-1);};

  // ----------BE----------
  const fetchHubungans = async() => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/selenggara/hubungan');
      setHubungans(response.data);
    } catch(error) {
      console.error('Ralat dalam mengambil maklumat hubungan:', error);
    }
  };

  useEffect(() => {
    fetchHubungans();
    const interval = setInterval(() => { // Set up recurring fetch every 1 second
      fetchHubungans();
    }, 1000);
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Delete hubungan
  const deleteHubungan = async (hubunganId) => {
    // Function to delete hubungan
    const performDeletion = async () => {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/selenggara/hubungan/${hubunganId}`);
        if (response.status === 200) {
          setHubungans((prevHubungans) =>
            prevHubungans.filter((hubungan) => hubungan.id !== hubunganId)
          );
          // Show success message from the server
          Swal.fire('Dipadam!', response.data.message, 'success');
          console.log('Hubungan berjaya dipadam');
        }
      } catch (error) {
        console.error('Error in deleting hubungan', error);
      }
    };

    // Function to handle cancellation
    const cancelDeletion = () => {
      Swal.fire('Dibatalkan', 'Data anda selamat.', 'error');
    };

    // Display the deletion confirmation dialog
    DeletionAlert(performDeletion, cancelDeletion);
  };

  return (
    <div>
      <div>
        <h1>Hubungan</h1>

        <Breadcrumb>
          <Breadcrumb.Item href="#">Senarai Selenggara</Breadcrumb.Item>
          <Breadcrumb.Item active>Hubungan</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <CreateHubungan />

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Hubungan</th>
              <th>Keterangan</th>
              <th>Status</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {hubungans.length === 0 ? (
              <tr><td colSpan="5"><center>Tiada maklumat</center></td></tr>
            ) : (
              hubungans.map((hubungansData, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{hubungansData.kodHubungan}</td>
                  <td>{hubungansData.keteranganHubungan}</td>
                  <td>{hubungansData.statusHubungan}</td>
                  <td>
                    <EditHubungan hubungan={hubungansData}/>
                    <Button variant="danger" onClick={() => deleteHubungan(hubungansData.id)}>Padam</Button>{' '}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>

        <Button variant="secondary" onClick={ goBack }>Kembali</Button>{' '}
      </div>
    </div>
  )
}

export default IndexHubungan;