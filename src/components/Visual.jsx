import React from "react";
import { useSelector } from "react-redux";

const Visual = () => {
  const { array, selected } = useSelector((state) => state.visual);

  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "end" }}>
      {array.map((item, index) => (
        <h7
          key={index}
          style={{
            backgroundColor:
              index === selected
                ? "yellow"
                : index === selected + 1
                ? "yellow"
                : "lightBlue",
            height: `${item * 20}px`,
            width: "40px",
          }}
        >
          {item}
        </h7>
      ))}
    </div>
  );
};

export default Visual;
