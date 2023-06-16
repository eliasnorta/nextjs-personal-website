"use client"

import useMousePosition from "../../hooks/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="ring"
      ></div>
      {/* <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div> */}
    </>
  );
};

export default CustomCursor;