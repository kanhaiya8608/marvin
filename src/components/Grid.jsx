import React from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import Cont1 from './Containers/Cont1';
import Cont2 from './Containers/Cont2';
import Cont3 from './Containers/Cont3';

function Grid() {
  return (
    <div className="grid-container">
      <div className="grid-item" style={{ backgroundImage: `url(${img1})` }}>
        <h4>01</h4>
        <Cont1/>
      </div>
      <div className="grid-item" style={{ backgroundImage: `url(${img2})` }}>
        <h4>02</h4>
        <Cont2/>
      </div>
      <div className="grid-item" style={{ backgroundImage: `url(${img3})` }}>
        <h4>03</h4>
        <Cont3/>
      </div>
    </div>
  );
}

export default Grid;
