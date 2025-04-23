import React from "react";
import "./button.css";

const ColorButton = ({ colors, onColorSelect }) => {
  return (
    <div className="color-picker">
      {colors.map((color, index) => (
        <button
          key={index}
          className="color-button"
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
        />
      ))}
    </div>
  );
};

export default ColorButton;
