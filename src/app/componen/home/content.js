"use client";

import React from "react";
import ButtonOne from "../atoms/ButtonOne";
import { useState } from "react";

const Content = () => {
  const [active, setActive] = useState(0);

  const click = () => {
    setActive(!active);
  };

  return (
    <div className={`${active ? "bg-black" : "bg-white"} w-full h-screen`}>
      <ButtonOne target={click} />
      {active && <p className="text-white">Hello World</p>}
      {!active && <p className="text-black">Hello World</p>}
    </div>
  );
};

export default Content;
