import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClk = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button name="/" className="highlight" onClick={handleClk}>
            &divide;
          </button>
          <button name="7" onClick={handleClk}>
            7
          </button>
          <button name="8" onClick={handleClk}>
            8
          </button>
          <button name="9" onClick={handleClk}>
            9
          </button>
          <button name="*" className="highlight" onClick={handleClk}>
            &times;
          </button>
          <button name="4" onClick={handleClk}>
            4
          </button>
          <button name="5" onClick={handleClk}>
            5
          </button>
          <button name="6" onClick={handleClk}>
            6
          </button>
          <button name="-" className="highlight" onClick={handleClk}>
            &ndash;
          </button>
          <button name="1" onClick={handleClk}>
            1
          </button>
          <button name="2" onClick={handleClk}>
            2
          </button>
          <button name="3" onClick={handleClk}>
            3
          </button>
          <button name="+" className="highlight" onClick={handleClk}>
            +
          </button>
          <button name="0" onClick={handleClk}>
            0
          </button>
          <button name="." onClick={handleClk}>
            .
          </button>
          <button id="result" className="highlight" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
