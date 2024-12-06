"use client";

import React from "react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const content = () => {
  const [dataPosts, setDataPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com";

  const getDataPosts = async () => {
    try {
      const response = await fetch(`${url}/posts`, {
        method: "GET",
      })
        .then((res) => res.json())
        .catch((error) => console.log("eror"));

      // const response = await axios.get(`${url}/posts`);

      const result = response.data.reverse();

      setDataPosts(result);
    } catch (error) {
      alert("Internal Server Error");
      console.error(error);
    }
  };

  useEffect(() => {
    getDataPosts();
  }, []);

  return (
    <div className="bg-gray-500 mt-6">
      {dataPosts.length && (
        <div className="grid grid-cols-4 gap-4">
          {dataPosts.map((item, index) => (
            <div key={index} className="border border-2 border-black">
              <p>{item.title}</p>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default content;
