import React from "react";
import "./ItemSection4.css";
function ItemSection3({ src, description }) {
  return (
    <div>
      <img
        className="Section4-itemImageComponent"
        src={src}
        alt={description}
        style={{ display: "block", margin: "auto" }}
      />
      <p
        className="Section4-itemTextComponent"
        style={{
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default ItemSection3;
