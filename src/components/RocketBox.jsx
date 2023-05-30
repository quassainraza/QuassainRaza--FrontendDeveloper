import React, { useState } from 'react';

function RocketBox(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div className="a-box" onClick={handleClick}>
        <div className="a-b-img">
          <img src={props.image} alt="" />
        </div>
        <div className="s-b-text">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
      {isExpanded && (
        <div className="overlay">
          <div className="larger-box">
            <div className="rocket-details">
              <h2><b>{props.title}</b></h2>
              <p>{props.desc}</p>
              <h2><b>Country Name:</b> {props.country}</h2>
              <h2><b>First Flight takenoff:</b> {props.firstflight}</h2>
              {/* Additional rocket details */}
            </div>
            <div className="close-button" onClick={handleClose}>
              Close
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RocketBox;
