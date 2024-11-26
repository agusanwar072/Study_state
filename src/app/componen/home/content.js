"use client";

import ButtonOne from "../atoms/ButtonOne";
import ButtonTwo from "../atoms/ButtonTwo";
import { useState, useEffect } from "react";
import TestEffect from "../atoms/testeruseeffect";

const Content = () => {
  const [active, setActive] = useState(0);
  const [nama, setNama] = useState("");

  // const click = () => {
  //   setActive(!active);
  // };

  const clickPlus = () => {
    setActive(active + 1);
  };

  const clickMinus = () => {
    setActive(active - 1);
  };

  // useEffect(() => {
  //   alert("selamat datang");
  //   console.log("selamat datang");
  // }, []);

  useEffect(() => {
    if (active > 0) {
      setNama("plus");
    } else if (active === 0) {
      setNama("Null");
    } else {
      setNama("min");
    }
  }, [active]);

  return (
    <>
      {/* <div className={`${active ? "bg-black" : "bg-white"} w-full h-screen`}>
        <ButtonOne target={click} />
        {active && <p className="text-white">Hello World </p>}
        {!active && <p className="text-black">Hello World </p>}
      </div> */}
      <ButtonOne target={clickPlus} />
      <br></br>
      <br></br>
      <ButtonTwo target={clickMinus} />
      <h1> ini bertambah {active}</h1>
      <h1> jadi {nama}</h1>
    </>
  );
};

export default Content;
