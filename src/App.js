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

    event.preventDefault();
    //at the end of function
    //used to not refresh the page
  }
  return (
    //  <Events />
    <div className="App">
      <h1>Hello {headingText}</h1>
      <form onSubmit={clickChange}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          value={name}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
