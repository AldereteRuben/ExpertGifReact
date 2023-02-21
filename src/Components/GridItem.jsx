import React from "react";

const GridItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};

export default GridItem;
