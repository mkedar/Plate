import './header.css';
import './properties.css';
import React, { CSSProperties } from 'react';

function OutputBox() {
    const boxStyle: CSSProperties = {
        position: 'relative',
        marginTop: '-575px',
      };      

  return (
    <div style={boxStyle}>
      <div className="Box"></div>
      <div className="InnerBox"></div>
      <div className="ProccesButton ButtonFont">Confrim purchase</div>
      <div className="ResetButton ButtonFont">Reset Order</div>
    </div>
  );
}
  
export default OutputBox;
