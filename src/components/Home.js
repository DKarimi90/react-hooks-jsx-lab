import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  // return <div>Home</div>;
  return (
    <div id = "home">
      <h1 className = "firebrick">{name} is a Web Developer from {city}</h1>
    </div>
  )

}

export default Home;
