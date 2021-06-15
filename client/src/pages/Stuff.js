import React, { useState, useEffect } from "react";
import axios from "axios";

const Stuffs = () => {
  const [stuffs, setStuffs] = useState([]);

  useEffect(() => {
    getStuffs();
  }, []);

  const getStuffs = async () => {
    try {
      let res = await axios.get("/api/stuffs");
      console.log(res);
    } catch (err) {
      console.log(err);
      alert("error");
    }
  };
  return (
    <div>
      <h1>Stuff</h1>
    </div>
  );
};

export default Stuffs;
