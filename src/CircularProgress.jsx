import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.css';

import './CircularProgress.css'; // Import CSS file for animation

function CircularProgress() {
  return (
    <div className='spinner-container m-auto mt-4'>
      <div className='spinner'></div>
    </div>
  );
}


export default CircularProgress;