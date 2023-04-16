import React from "react";
import cityArray from "../cityArray";

function Cities(){
  return (
    <div>
      <label Dropmenu="PythonList">Select a City:</label>
      <input type="text" id="PythonList" list="cityList" />
      <datalist id="cityList">
        {cityArray.map(city => (
          <option key={city} value={city} />
        ))}
      </datalist>
      <button type="submit"> Submit</button>
    </div>
  );
}

export default Cities;
