import React from "react";
import { useState } from "react";

function Texto() {
  const [text, setText] = useState("");

  return (
    <div>
      <h3>{text}</h3>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
export default Texto;
