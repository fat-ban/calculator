import React, { useState } from "react";
import "./App.css";
import "./components/Number/style.css";
import "./components/Operation/style.css";
//import Number from "./components/Number";
//import Calculator from './components/Number';
//import Operation from "./components/Operation";

const data = [9, 1, 2, 3, 4, 5, 6, 7, 8, 0];
//const operation = ["+", "-", "*", "=", "/", "del"];
const operation = ["+", "-", "*", "/"];

const App = () => {
  const [stateNumb, setStateNumb] = useState(data);
  const [stateOperation, setStateOperation] = useState(operation);
  //const [stateValueNumber, setStateValueNumber] = useState("");
  const [stateValueOperation, setStateValueOperation] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [result, setResult] = useState(0);
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  //const handleSubmit = (e) => {
    //e.preventDefault();
    //console.log(stateValue);
  //};

  const handleGetNumber = (item) => {
    if (stateValueOperation === "") {
      setFirstNumber(firstNumber + item);
    } else {
      setSecondNumber(secondNumber + item);
     // setStateValueOperation("")
    }
  };
  console.log(`stateValueOperation${stateValueOperation}`)
  console.log(firstNumber);
  console.log(secondNumber);

  const handleClickOperation = (item) => {
    //setOperationState(item)
    setStateValueOperation(item);
  };
  console.log(stateValueOperation);

  const handleClickResult = () => {
    switch (stateValueOperation) {
      case "+":
        return (
          
          setResult(Number(firstNumber) + Number(secondNumber))
          
        )
      case "-":
        return setResult(Number(firstNumber) - Number(secondNumber));
        
      case "*":
        setResult(Number(firstNumber) * Number(secondNumber));
        break;
      case "/":
        setResult(Number(firstNumber) / Number(secondNumber));
        //refrechResult()
        break;


      default:
        return null;
    }
    setStateValueOperation("")
    
  };
  console.log(result);
  console.log(stateValueOperation)

const refrechResult = ()=>{
  setResult(0)
  setStateValueOperation('')
  setFirstNumber('')
  setSecondNumber('')
}

  return (
    <div className="App">
      <h1>React App Calculator</h1>

      <div className="container">
        <div>{result}</div>
       
        <div className="calculator">
          {/*<Number  setStateValue={setStateValue} stateValue={stateValue}/>*/}
          <div className="number">
            {stateNumb.map((item, index) => (
              <h3
                className={index !== 0 ? "buttonNumb" : "buttonZero"}
                key={index}
                onClick={() => handleGetNumber(item)}
              >
                {item}
              </h3>
            ))}
          </div>
          {/* */}
          {/*<Operation setStateValue={setStateValue} stateValue={stateValue} />*/}

          <div className="operation">
            {stateOperation.map((item, index) => (
              <h3
                className="buttonOperation"
                key={index}
                onClick={() => handleClickOperation(item)}
              >
                {item}
              </h3>
            ))}
            <>
            <h3
            style={{
              backgroundColor: "red",
              padding: "6px",
              textAlign: "center",
            }}
            onClick={refrechResult}
            >
              Del
            </h3>
            <h3
              style={{
                backgroundColor: "red",
                padding: "6px",
                textAlign: "center",
              }}
              onClick={handleClickResult}
            >
              =
            </h3>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
