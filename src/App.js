import React,{useState} from "react"
import './App.css';
import Calculator from './components/Calculator';

const data = [9,1,2,3,4,5,6,7,8,0]
const operation =["+","-","*","="]

function App() {
const [stateNumb, setStateNumb] = useState(data)
const [stateOperation, setStateOperation] = useState(operation)

console.log(stateNumb)

  return (
    <div className="App">
      <h1>React App Calculator</h1>
     <Calculator stateNumb={stateNumb} stateOperation={stateOperation} />
    </div>
  );
}

export default App;
