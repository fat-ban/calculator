import React, { useState } from "react";
import "./App.css";
import Number from "./components/Number";
//import Calculator from './components/Number';
import Operation from "./components/Operation";


const data = [9, 1, 2, 3, 4, 5, 6, 7, 8, 0];

const App = () => {
  
  const [stateNumb, setStateNumb] = useState(data);
  const [stateValue, setStateValue] = useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(stateValue)
  }

  const handleGetNumber = (item)=>{
    //setState(item)
  
    setStateValue(item
    
      )
    console.log(stateValue);
  }

  return (
    <div className="App">
      <h1>React App Calculator</h1>

      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="stateValue"
            value={stateValue}
            required
            placeholder="0"
            onChange={(e)=>setStateValue(e.target.value)}
          />
        </form>
        <div className="calculator">
          {/*<Number  setStateValue={setStateValue} stateValue={stateValue}/>*/}
          <div className="number">
      {stateNumb.map((item, index) => (
        <h3 className={index !== 0 ? "buttonNumb" : "buttonZero"}
         key={index}
         onClick={()=>handleGetNumber(item)}
         >
          {item}
        </h3>
      ))}
    </div>
          {/* */}
         <Operation setStateValue={setStateValue} stateValue={stateValue}/>
        </div>
      </div>
    </div>
  );
};

export default App;
