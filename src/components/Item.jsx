import React from "react";

const Item = ({ name, img, content, link }) => {
  return (
    <div>
      <img src={img} alt="" />

      <p className="description"> {content}</p>
      <h3> By: {name}</h3>
      <a href={link} target="_blank" rel="noreferrer">
        {" "}
        Read More ..
      </a>
    </div>
  );
};

export default Item;
