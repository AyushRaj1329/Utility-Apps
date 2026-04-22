import { React, useState } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumber, setUseNumber] = useState(true);
  const [useSymbol, setUseSymbol] = useState(false);

  const copyToipboard=()=>{
    if(!password)return;
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  }

  const generatePassword = () => {
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charSet = "";
    if (useUpper) charSet += upperChars;
    if (useLower) charSet += lowerChars;
    if (useNumber) charSet += numberChars;
    if (useSymbol) charSet += symbolChars;

    if (!charSet) {
      alert("Please select at least one character type!");
      return;
    }

    let generatedPassword = "";
    for(let  i=0; i<length; i++){
      const randomindex=Math.floor(Math.random()*charSet.length);
      generatedPassword+=charSet[randomindex];
    }


    setPassword(generatedPassword);


  }
  return (
    <div className="max-w-md mx-auto p-6 bg-[#cdc1ff] shadow rounded">
      <h2 className="text-xl font-bold text-center mb-4">Password Generator</h2>

      <input
        type="text"
        value={password}
        readOnly
        onClick={copyToipboard}
        className="w-full p-2 bg-amber-100 rounded"
      />

      <div className="mb-4">
        <label>Length: {length}</label>
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full"
        />


         <div className="grid grid-cols-2 gap-2 mb-4">


        <label>
          <input
            type="checkbox"
            checked={useUpper}
            onChange={() => setUseUpper(!useUpper)}
          /> Uppercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={useLower}
            onChange={() => setUseLower(!useLower)}
          /> Lowercase
        </label>

        <label>
          <input
            type="checkbox"
            checked={useNumber}
            onChange={() => setUseNumber(!useNumber)}
          /> Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={useSymbol}
            onChange={() => setUseSymbol(!useSymbol)}
          /> Use Symbols
        </label>

        
         </div>


      



        <button className="w-full bg-blue-300 text-white py-2 rounded"
        onClick={generatePassword}>
          
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
