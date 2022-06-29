import React,{useState} from 'react'

import "./style.css"

const Calculator = ({stateNumb,stateOperation}) => {
    //const [stateNumber, setStateNumber] = useState()
  return (
    <div className="calculator">
        <div className="number">
        {stateNumb.map((item,index)=>
            <h3 key={index}>{item}</h3>
        )}
        </div>
        <div className="operation">
         {stateOperation.map((item,index)=>(
             <h3 key={index}>{item}</h3>
         ))}
        </div>
    </div>
  )
}

export default Calculator