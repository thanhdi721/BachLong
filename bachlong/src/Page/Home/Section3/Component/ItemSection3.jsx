import React from "react";
import "./ItemSection3.css";
function ItemSection3({ src, description }) {
  return (
    <div>
      <img
        className="Section3-itemImageComponent"
        src={src}
        alt={description}
        style={{ display: "block", margin: "auto" }}
      />
      <p
        className="Section3-itemTextComponent"
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
