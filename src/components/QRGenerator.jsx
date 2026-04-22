import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
export const QRGenerator = () => {
  const [text, setText] = useState("");



  const downloadQR = () => {
    const canvas =document.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const link=document.createElement("a");
    link.href=url;
    link.download="qr-code.png";
    link.click();
  };  

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-[#99AD7A] rounded-xl">
      <h1 className="text-xl font-semibold">QR Generator</h1>

      <input
        type="text"
        placeholder="Enter the text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-green-300 rounded border p-2 w-full md:w-96"
      />

      {text && (
        <div className="p-4 bg-white shadow rounded">
          <QRCodeCanvas value={text} size={200} />
        </div>
      )}

      <button
        onClick={downloadQR}
        className="bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-400"
      >
        Download QR
      </button>
    </div>
  );
};
