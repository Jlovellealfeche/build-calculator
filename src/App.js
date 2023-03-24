import { useReducer} from "react";
import DigitButton from "./DigitButton";
import './App.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION:'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'

}


function reducer(state, {type, payload}) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || ""}  ${payload.digit}`,
    }
  }
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer, 
    {}
    )
 
 
  
  return ( 
    <div className="App"> 
      <div className="calculator-grid">
      
         <br></br>
        <div className="output">
           <div className="previous-operand">{previousOperand} {operation}</div>
           <div className="current-operand">{currentOperand} </div>
        </div>
        <button className="span-two">AC</button>
          {/* Add the resetInput or AC button */} 
        <button >DEL</button>
        {/* Add the resetResult or Del button */}
        <OperationButton digit="÷" dispatch={dispatch} />
          {/* Add the divide button */} 
      

        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton digit="*" dispatch={dispatch} />
          {/* Add the multiply button */} 
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton digit="+" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton digit="-" dispatch={dispatch} />
          {/* Add the subtract button */}
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <button className="span-two"> = </button> {/* add thefunction the current total */}

       
      </div> 
    </div>
  ); 
}

export default App;
