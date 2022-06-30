import React,{useState} from "react";

import "./style.css";

const data = [9, 1, 2, 3, 4, 5, 6, 7, 8, 0];

const Number = ({ setStateValue,stateValue }) => {
  const [stateNumb, setStateNumb] = useState(data);
  //const [state, setState] = useState()

const handleGetNumber = (item)=>{
  //setState(item)

  setStateValue(...stateValue
    ,parseInt(item)
    )
  console.log(stateValue);
}

  return (
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
  );
};

export default Number;
