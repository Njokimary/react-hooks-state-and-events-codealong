import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  const buttonStyle = {
    background: isOn ? "red" : "white",
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
