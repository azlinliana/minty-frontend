import {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Tabbed({ tabs, defaultActiveTabKey, onTabChange }) {
  const [activeTabKey, setActiveTabKey] = useState(defaultActiveTabKey);

  const handleTabSelect = (key) => {
    setActiveTabKey(key);

    // Call the onTabChange callback to update the active tab title
    if (onTabChange) {
      onTabChange(key);
    }
  };

  return (
    <Tabs activeKey={activeTabKey} onSelect={handleTabSelect} className='mb-3'>
      {tabs.map((tab) => (
        <Tab key={tab.eventKey} eventKey={tab.eventKey} title={tab.title}>
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  )
}

export default Tabbed