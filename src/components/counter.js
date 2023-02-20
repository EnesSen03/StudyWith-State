import React,{useState} from 'react'
import './counter.css'
function Counter(props) {
  const  [counter,setCounter] = useState(0);

   const increase = () => {
    setCounter(counter + 1 );
   } 
   const decrease = () => {
    setCounter(counter - 1 );
   } 
   const reset = () => {
    setCounter(0);
   } 
  return (
    <div className="container">
    <div className="buttons">
    <p className="counter">Sayı: {counter}</p>
      <button id="increase" className="increase" onClick= { () => increase() }>+</button>
      <button id="increase" className="reset" onClick= { () => reset() }>Reset</button>
      <button id="increase" className="decrease" onClick= { () => decrease() }>-</button>
      </div>
    </div>
  )
}

export default Counter