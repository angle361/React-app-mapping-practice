import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function CreateCard(emojipediaArray) {
  return (
    <Card
      key={emojipediaArray.id}
      emoji={emojipediaArray.emoji}
      name={emojipediaArray.name}
      content={emojipediaArray.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateCard)}</dl>
    </div>
  );
}

export default App;
