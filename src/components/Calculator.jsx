import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (val) => {
    const operators = ["+", "-", "*", "/", "%"];
    setInput((prev) => {
      const lastval = prev.slice(-1);

      if (operators.includes(lastval) && operators.includes(val)) {
        return prev;
      }
      return prev + val;
    });
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev)=>prev.slice(0, -1));
  };

  const handleEqual = () => {
    try {
        if(!input)return;
        const operators = ["+", "-", "*", "/", "%","."];
        const lastvalue=input.slice(-1);

        if(operators.includes(lastvalue)){
            return;
        }

        const result =eval(input);


      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if (!isNaN(key) || ["%", "-", "+", "*", "/","."].includes(key)) {
        handleClick(key);

      } else if (key === "Enter") {
        handleEqual();

      } else if (key === "Backspace") {
        handleBackspace();

      } else if (key === "Escape") {
        handleClear();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  return (
    <div className="text-center p-6 bg-[#AFEEEE] rounded-xl max-w-xs mx-auto">
      <div className="bg-amber-50 rounded-xl p-3 mb-4 text-right text-xl overflow-x-auto    whitespace-nowrap">
        {input || "0"}
      </div>

      <div className=" rounded-xl  grid grid-cols-4 gap-2  ">
        <button onClick={handleClear} className="btn">
          C
        </button>
        <button onClick={() => handleClick("%")} className="btn">
          %
        </button>
        <button onClick={handleBackspace} className="btn">
          BKS
        </button>
        <button onClick={() => handleClick("/")} className="btn">
          /
        </button>

        <button onClick={() => handleClick("7")} className="btn">
          7
        </button>
        <button onClick={() => handleClick("8")} className="btn">
          8
        </button>
        <button onClick={() => handleClick("9")} className="btn">
          9
        </button>
        <button onClick={() => handleClick("*")} className="btn">
          *
        </button>

        <button onClick={() => handleClick("4")} className="btn">
          4
        </button>
        <button onClick={() => handleClick("5")} className="btn">
          5
        </button>
        <button onClick={() => handleClick("6")} className="btn">
          6
        </button>
        <button onClick={() => handleClick("-")} className="btn">
          -
        </button>

        <button onClick={() => handleClick("1")} className="btn">
          1
        </button>
        <button onClick={() => handleClick("2")} className="btn">
          2
        </button>
        <button onClick={() => handleClick("3")} className="btn">
          3
        </button>
        <button onClick={() => handleClick("+")} className="btn">
          +
        </button>

        <button onClick={() => handleClick("00")} className="btn">
          00
        </button>
        <button onClick={() => handleClick("0")} className="btn">
          0
        </button>
        <button onClick={() => handleClick(".")} className="btn">
          .
        </button>
        <button onClick={handleEqual} className=" bg-blue-400 text-white rounded-2xl hover:bg-blue-700">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
