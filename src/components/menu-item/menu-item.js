import React from "react";
import "./menu-item.scss";

const menuItem = ({ title, imageUrl, size }) => {
  return (
    <div 
      
      className={`${size} menu-item`}
    >
      <div className='background-image'  style={{
        backgroundImage: `url(${imageUrl})`,
      }}></div> 
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <h1 className="subtitle">SHOP NOW</h1>
      </div>
    </div>
  );
};

export default menuItem;
