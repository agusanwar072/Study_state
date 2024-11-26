import React from "react";

const ButtonTwo = ({ target }) => {
  return (
    <button
      onClick={target}
      className="border border-2 border-green-200 bg-green-200 rounded-lg py-[2px] px-[10px] hover:bg-white"
    >
      Berkurang
    </button>
  );
};

export default ButtonTwo;
