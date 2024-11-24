import React from "react";

const ButtonOne = ({ target }) => {
  return (
    <button
      onClick={target}
      className="border border-2 border-green-200 bg-green-200 rounded-lg py-[2px] px-[10px] hover:bg-white"
    >
      Klik Di sini
    </button>
  );
};

export default ButtonOne;
