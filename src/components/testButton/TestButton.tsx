"use client";

import React, { useState } from "react";

const TestButton = () => {
  const [showAll, setShowAll] = useState(false);

  const handleButtonClick = () => {
    setShowAll(!showAll);
    onToggleShowAll(!showAll);
  };

  return (
    <button onClick={handleButtonClick}>{showAll ? "Hide" : "Show All"}</button>
  );
};

export default TestButton;
function onToggleShowAll(arg0: boolean) {
  throw new Error("Function not implemented.");
}
