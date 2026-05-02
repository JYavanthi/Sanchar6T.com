import React from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import BusResults from '@/components/sidebar/BusResults';

const SideBarPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      
      <div style={{ display: 'flex', flex: '1', overflow: 'hidden' }}>
        <Sidebar />
       <BusResults />
      </div>
    </div>
  );
};

export default SideBarPage;