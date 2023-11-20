import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import CreateIsiRumah from './Create';
import EditIsiRumah from './Edit';
import IndexTrackingInflowIsiRumah from './inflow/Index';
import IndexTrackingOutflowIsiRumah from './outflow/Index';
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';

function IndexTrackingIsiRumah({mingguId}) {
  // ----------FE----------
  // Dynamic tab title
  const navigate = useNavigate();
  
  // Tab tracking isi rumah
  const [activeTab, setActiveTab] = useState({key: 'tracking-inflow-isi-rumah', title: 'Inflow'});
  const handleTabInflowOutflowIsiRumahChange = (key, title) => {
    setActiveTab({ key, title });
  };

  // ----------BE----------
  // List isi rumah sahabat
  const [isiRumahSahabats, setIsiRumahSahabats] = useState([]);
  const fetchIsiRumahSahabats = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/sahabat/isi-rumah/${mingguId}`);
      if (response.status === 200) {
        setIsiRumahSahabats(response.data);
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
    fetchIsiRumahSahabats();
    const interval = setInterval(() => { // Set up recurring fetch every 5 second
      fetchIsiRumahSahabats();
    }, 5000);
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return(
    <div>
      <CreateIsiRumah mingguId={mingguId} />

      <Tabs id="tab-isi-rumah-sahabat" className="mb-3">
        {isiRumahSahabats.map((isiRumahSahabatsData, key) => (
          <Tab key={key} eventKey={key} title={`Isi Rumah ${key + 1}`}>
            <EditIsiRumah />
            <div>
              <p>No Kad Pengenalan: {isiRumahSahabatsData.noKadPengenalanIsiRumah}</p>
              <p>Nama Isi Rumah: {isiRumahSahabatsData.namaIsiRumah}</p>
              <p>Hubungan: {isiRumahSahabatsData.hubunganId}</p>
            </div>

            <Tabs id="tracking-inflow-outflow-isi-rumah" className="mb-3" activeKey={activeTab.key} onSelect={(key) => handleTabInflowOutflowIsiRumahChange(key, key === 'tracking-inflow-isi-rumah' ? 'Inflow' : 'Outflow')}>
              <Tab eventKey="tracking-inflow-isi-rumah" title="Inflow">
                <IndexTrackingInflowIsiRumah isiRumahId={isiRumahSahabatsData.id} />
              </Tab>

              <Tab eventKey="tracking-outflow-isi-rumah" title="Outflow">
                <IndexTrackingOutflowIsiRumah isiRumahId={isiRumahSahabatsData.id} />
              </Tab>
            </Tabs>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default IndexTrackingIsiRumah;