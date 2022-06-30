import React,{useState} from 'react'

import "./style.css"

const operation = ["+", "-", "*", "=", "/", "del"];

const Operation = ({setStateValue,stateValue}) => {
  const [stateOperation, setStateOperation] = useState(operation);
  //const [operationState  , setOperationState] = useState()
  
  const handleClickOperation=(item)=>{
  //setOperationState(item)
  setStateValue(...stateValue
    ,parseInt(item)
    )
  console.log(stateValue)
  }


  return (
    <div className="operation">
         {stateOperation.map((item,index)=>(
       

            <h3 
            className="buttonOperation"  
            key={index}
            onClick={()=>handleClickOperation(item)}
            >
            {item}
            </h3>
           
             
         ))}
        </div>
  )}

export default Operation