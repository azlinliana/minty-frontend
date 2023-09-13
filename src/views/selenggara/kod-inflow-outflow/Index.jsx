import { useState } from 'react'
import Tabbed from '../../components/tab/Tab'
import { TabInflowOutflowData, defaultActiveTabKey } from '../../components/tab/TabInflowOutflowData'
import CreateKodInflow from './kod-inflow/Create'
import CreateKodOutflow from './kod-outflow/Create'

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import SelenggaraModal from '../../components/modal/SelenggaraModal'

function IndexKodInflowOutflow() {
  // Tab
  const [activeTabTitle, setActiveTabTitle] = useState('Kod Inflow'); // Initialize page title

  // Modal
  const [showAddInflowButton, setShowAddInflowButton] = useState(true); // Set true for default active button
  const [showAddOutflowButton, setShowAddOutflowButton] = useState(false);

  // Separate modals
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  // Modal 1 - Tambah Inflow
  const openModal1 = () => {
    setIsModal1Open(true);
  };

  const closeModal1 = () => {
    setIsModal1Open(false);
  };

  // Modal 2 - Tambah Outflow
  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };

  // Function to handle tab change
  const handleTabChange = (key) => {
    const selectedTab = TabInflowOutflowData.find((tab) => tab.eventKey === key);

    if (selectedTab) {
      // Dynamic title display
      setActiveTabTitle(selectedTab.title);

      // Dynamic add button display
      setShowAddInflowButton(selectedTab.eventKey === 'kod-inflow');
      setShowAddOutflowButton(selectedTab.eventKey === 'kod-outflow');
    }
  };

  return (
    <>
      <div>
        <h1>{activeTabTitle}</h1>

        <Breadcrumb>
          <Breadcrumb.Item href="#">Senarai Selenggara</Breadcrumb.Item>
          <Breadcrumb.Item active>Kod Inflow/Kod Outflow</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* Modal */}
      <div>
        {/* Dynamic button */}
        {showAddInflowButton && (
          <>
            <Button variant="primary" onClick={openModal1}>
              Tambah Inflow
            </Button>

            <SelenggaraModal
              modalTitle="Tambah Kod Inflow"
              modalContent={<CreateKodInflow />}
              modalFooter={
                <>
                  <Button variant="secondary" onClick={closeModal1}>Batal</Button>
                  <Button variant="primary" type="submit">Tambah</Button>
                </>
              }
              isModalOpen={isModal1Open}
              closeModal={closeModal1}
            />
          </>
        )}
        {showAddOutflowButton && (
          <>
            <Button variant="primary" onClick={openModal2}>
              Tambah Outflow
            </Button>

            <SelenggaraModal
              modalTitle="Tambah Kod Outflow"
              modalContent={<CreateKodOutflow />}
              modalFooter={
                <>
                  <Button variant="secondary" onClick={closeModal2}>Batal</Button>
                  <Button variant="primary" type="submit">Tambah</Button>
                </>
              }
              isModalOpen={isModal2Open}
              closeModal={closeModal2}
            />
          </>
        )}
      </div>

      <div>
        <Tabbed tabs={TabInflowOutflowData} defaultActiveTabKey={defaultActiveTabKey} onTabChange={handleTabChange} />
      </div>
    </>
  )
}

export default IndexKodInflowOutflow