import React, { useState } from "react";

function Form() {
  const [ColorsLoc1, setColor1] = useState(1);
  const [ColorsLoc2, setColor2] = useState(0);
  const [ColorsLoc3, setColor3] = useState(0);
  const [ColorsLoc4, setColor4] = useState(0);
  const totalColors =
    parseInt(ColorsLoc1) +
    parseInt(ColorsLoc2) +
    parseInt(ColorsLoc3) +
    parseInt(ColorsLoc4);

  return (
    <div>
      <h1>this is the form:</h1>
      <form>
        <h2>
          Colors in 1st area:
          <span>
            <select
              name="firstColorCount"
              value={ColorsLoc1}
              onChange={event => setColor1(event.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </span>
        </h2>
        <h2>
          Colors in 2nd area:
          <span>
            <select
              name="secondColorCount"
              value={ColorsLoc2}
              onChange={event => setColor2(event.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </span>
        </h2>
        <h2>
          Colors in 3rd area:
          <span>
            <select
              name="thirdColorCount"
              value={ColorsLoc3}
              onChange={event => setColor3(event.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </span>
        </h2>
        <h2>
          Colors in 4th area:
          <span>
            <select
              name="fourthColorCount"
              value={ColorsLoc4}
              onChange={event => setColor4(event.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </span>
        </h2>
      </form>
      <h1>Total Colors:{totalColors}</h1>
    </div>
  );
}

export default Form;
