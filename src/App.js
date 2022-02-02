import { useState } from "react";
import Events from "./Events";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [headingText, setheadingText] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.placeholder);
    console.log(event.target.type);

    setName(event.target.value);
    //used to get input value.
  }

  function clickChange(event) {
    setheadingText(name);
  }
  return (
    //  <Events />
    <div className="App">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter your name"
        value={name}
      />
      <br />
      <button onClick={clickChange}>Submit</button>
    </div>
  );
}
