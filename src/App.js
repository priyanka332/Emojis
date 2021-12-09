import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling 😊",
  "😳": "Disbelief 😳",
  "😔": "Sad 😔",
  "😡": "Angry 😡",
  "❤️": "Love ❤️",
  "😑": "Annoyance 😑"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    // console.log(meaning)
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emojis We Know</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>

      <br></br>
      <h1>Emojis</h1>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
