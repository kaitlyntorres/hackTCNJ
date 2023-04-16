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

<<<<<<< HEAD
export default Cities;
=======
export default Cities;
>>>>>>> c97d72724b9a4881a5542d482231c085875e515c
