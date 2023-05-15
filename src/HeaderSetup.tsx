import './header.css';
import './properties.css';
import React from 'react';

function HeaderSetup() {
  return (
    <div>
      <div style={{ width: '390px', height: '844px', border: '1px solid black' }}></div>
      <div className="HeaderFont">PlateProject</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="HeaderFont2">R_name</div>
        <div style={{ marginLeft: '280px' }} className="HeaderFont2">T#7</div>
        <div className="Box">
          <div className="InnerBox"></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSetup;
