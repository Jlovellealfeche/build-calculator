import {
  useState,
  useRef
} from "react";
import './App.css';

function App() {

 const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    // const inputVal = inputRef.current.value; 
    // const newResult = result + Number(inputVal); 
    // setResult(newResult);
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
    const inputVal = inputRef.current.value;
    const newResult = result - Number(inputVal)
    setResult(newResult);
  	// Add the code for the minus function 
  };
 
  function times(e) { 
    e.preventDefault();
    const inputVal = inputRef.current.value;
    const newResult = result *  Number(inputVal)
    setResult(newResult);
    // Add the code for the plus function 
  }; 
 
  function divide(e) { 
    e.preventDefault();
    const inputVal = inputRef.current.value;
    const newResult = result / Number(inputVal)
    setResult(newResult);
    // Add the code for the divide function 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
    e.preventDefault();
    setResult(0);
  	// Add the code for the resetResult function 
  }; 

  // function total(e) {
  //   e.preventDefault();
  //   setResult(newResult);
  // }
 
  return ( 
    <div className="calculator-grid">
      <div className="App"> 
        <div> 
          <h1>Simplest Working Calculator</h1> 
        </div> 
        <div className="output">
           <div className="previous-operand"></div>
           <div className="current-operand"></div>
           <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          /> 
        </div>
        <button onClick={resetInput} className="span-two">AC</button>
          {/* Add the resetInput or AC button */} 
        <button onClick={resetResult}>DEL</button>
        {/* Add the resetResult or Del button */}
        <button onClick={divide}> ÷ </button>
          {/* Add the divide button */} 
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button onClick={times}>*</button>
          {/* Add the multiply button */} 
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button onClick={plus}>+</button> 
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button onClick={minus}>-</button>
          {/* Add the subtract button */}
        <button>.</button>
        <button>0</button>
        <button className="span-two"> = </button> {/* add thefunction the current total */}




        <form> 
          <p ref={resultRef}>
            {result}  {/* add the value of the current total */} 
          </p> 
          
          
           
          
          
          
          
          
          <span ref={resultRef}>{result}</span>
        </form> 
      </div> 
    </div>
  ); 
}

export default App;
