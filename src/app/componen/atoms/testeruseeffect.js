"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const TestEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>timer {count}</h1>
    </div>
  );
};

export default TestEffect;
