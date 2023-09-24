import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Tabbed from '../../components/tab/Tab';
import { TabInflowOutflowData, defaultActiveTabKey } from '../../components/tab/TabInflowOutflowData';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';

function IndexKodInflowOutflow() {
  // Tab
  const [activeTabTitle, setActiveTabTitle] = useState('Kod Inflow'); // Initialize page title

  // Function to handle tab change
  const handleTabChange = (key) => {
    const selectedTab = TabInflowOutflowData.find((tab) => tab.eventKey === key);

    if (selectedTab) {
      // Dynamic title display
      setActiveTabTitle(selectedTab.title);

      // Dynamic add button display
      // setShowAddInflowButton(selectedTab.eventKey === 'kod-inflow');
      // setShowAddOutflowButton(selectedTab.eventKey === 'kod-outflow');
    }
  };

  // Back button
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return(
    <>
      <div>
        <h1>{activeTabTitle}</h1>

        <Breadcrumb>
          <Breadcrumb.Item href="#">Senarai Selenggara</Breadcrumb.Item>
          <Breadcrumb.Item active>Kod Inflow/Kod Outflow</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <Tabbed tabs={TabInflowOutflowData} defaultActiveTabKey={defaultActiveTabKey} onTabChange={handleTabChange} />
      </div>

      <Button variant="secondary" onClick={goBack}>Kembali</Button>{' '}
    </>
  );
}

export default IndexKodInflowOutflow;