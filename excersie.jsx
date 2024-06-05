import React from "react";
import { useState } from "react";

// don't change the Component name "App"
function App() {
  const [txtValue, setTxtValue] = React.useState(txtValue);
  const [isSaved, setIsSaved] = React.useState(false);

  function updateTxtArea(e) {
    setTxtValue(e.target.value);
  }

  function handleSave() {
    setIsSaved((notSaved) => !notSaved);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea type="text" value={txtValue} onChange={updateTxtArea} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={setTxtValue} student="Ghana" />

        <p>
          <button onClick={handleSave}>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
