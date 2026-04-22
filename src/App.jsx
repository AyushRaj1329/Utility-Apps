import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import WorldClock from "./components/WorldClock";
import Calculator from "./components/Calculator";
import PasswordGenerator from "./components/PasswordGenerator";
import { QRGenerator } from "./components/QRGenerator";
import { ImageToQR } from "./components/ImageToQR";

function App() {
  const [active, setActive] = useState("stopwatch");

  const renderComponent = () => {
    switch (active) {
      case "stopwatch":
        return (
          <div className="h-screen flex items-center justify-center ">
            <Stopwatch />
          </div>
        );

      case "timer":
        return (
          <div className="h-screen flex items-center justify-center ">
            <Timer />
          </div>
        );

      case "worldclock":
        return (
          <div className="h-screen flex items-center justify-center ">
            <WorldClock />
          </div>
        );

      case "calculator":
        return (
          <div className="h-screen flex items-center justify-center ">
            <Calculator />
          </div>
        );

      case "passwordgenerator":
        return (
          <div className="h-screen flex items-center justify-center ">
            <PasswordGenerator/>
          </div>
        );

         case "qrgenerator":
        return (
          <div className="h-screen flex items-center justify-center ">
            <QRGenerator/>
          </div>
        );
         case "imagetoqr":
        return (
          <div className="h-screen flex items-center justify-center ">
            <ImageToQR/>
          </div>
        );




      default:
        return <h1>Coming Soon</h1>;
    }
  };
  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      <div className="p-6 text-center">{renderComponent()}</div>
    </div>
  );
}

export default App;
