import React from "react";
import { Input, Button } from "antd";
import "../input/input.css";

const Cartinput = ({ value, onChange, min = 1, max = 100 }) => {
  const sanitizedValue = typeof value === "number" && !isNaN(value) ? value : min;

  const handleIncrease = () => {
    const newValue = Math.min(sanitizedValue + 1, max);
    onChange(newValue);
  };

  const handleDecrease = () => {
    const newValue = Math.max(sanitizedValue - 1, min);
    onChange(newValue);
  };

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <Input.Group compact className="custom-input-group">
      <Button
        className="custom-input-btn"
        onClick={handleDecrease}
        aria-label="Decrease quantity"
      >
        -
      </Button>
      <Input
        className="cartcustom-input"
        value={sanitizedValue}
        onChange={handleChange}
      />
      <Button
        className="cartcustom-input-plus-btn"
        onClick={handleIncrease}
        aria-label="Increase quantity"
      >
        +
      </Button>
    </Input.Group>
  );
};

export default Cartinput;
