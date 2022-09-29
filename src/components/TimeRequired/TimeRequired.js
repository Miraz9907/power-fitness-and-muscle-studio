import React from 'react';

const TimeRequired = () => {
    const dbItems = localStorage.getItem('breakTime');
    if(dbItems){
        localStorage.getItem('breakTime');
    }
    else{
        localStorage.setItem('breakTime', 0);
        localStorage.getItem('breakTime');
    }
    return (
        <div>
            <div className="bg-light d-flex justify-content-evenly align-items-center p-2 rounded-3">
      <h6>Break time</h6>
      <p> {dbItems}seconds</p>
      </div>
        </div>
    );
};

export default TimeRequired;