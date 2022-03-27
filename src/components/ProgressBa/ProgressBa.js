import React from 'react';
import './ProgressBa.css'
const ProgressBa = () => {
  return (
    <div>
      <div className="container_progress">
        <div className="progresses">
          <div className="progress-bar">
            <div className="progressing"></div>
            <span className="circle"></span>
          </div>
          <p className="percent">35%</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBa;