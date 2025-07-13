import React, { useState } from 'react';

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handDelete = () => {
    setDisplay(display.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-80 p-6 border-2 border-black bg-white rounded-2xl shadow-2xl">
        {/* Display */}
        <div className="w-full h-16 bg-gray-100 border-2 border-black rounded-md mb-6 text-right px-4 py-2 text-3xl font-semibold shadow-inner overflow-x-auto">
          {display || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <CalcButton label="7" onClick={() => handleClick("7")} />
          <CalcButton label="8" onClick={() => handleClick("8")} />
          <CalcButton label="9" onClick={() => handleClick("9")} />
          <CalcButton label="⌫" onClick={handDelete} color="bg-red-300" />

          {/* Row 2 */}
          <CalcButton label="4" onClick={() => handleClick("4")} />
          <CalcButton label="5" onClick={() => handleClick("5")} />
          <CalcButton label="6" onClick={() => handleClick("6")} />
          <CalcButton label="-" onClick={() => handleClick("-")} color="bg-yellow-200" />

          {/* Row 3 */}
          <CalcButton label="1" onClick={() => handleClick("1")} />
          <CalcButton label="2" onClick={() => handleClick("2")} />
          <CalcButton label="3" onClick={() => handleClick("3")} />
          <CalcButton label="+" onClick={() => handleClick("+")} color="bg-yellow-200" />

          {/* Row 4 */}
          <CalcButton label="C" onClick={handleClear} color="bg-red-400 text-white" />
          <CalcButton label="0" onClick={() => handleClick("0")} />
          <CalcButton label="." onClick={() => handleClick(".")} />
          <CalcButton label="=" onClick={handleEquals} color="bg-green-400 text-white" />
        </div>
      </div>
    </div>
  );
}

function CalcButton({ label, onClick, color = "bg-gray-200 text-black" }) {
  return (
    <button
      onClick={onClick}
      className={`w-16 h-16 ${color} border-2 border-black rounded-md text-xl font-bold shadow-md hover:brightness-110 active:scale-95 transition`}
    >
      {label}
    </button>
  );
}

export default App;
