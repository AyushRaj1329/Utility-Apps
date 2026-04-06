import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar' 
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';


function App() {
   const [active, setActive] = useState("stopwatch");

  const renderComponent = () => {
    switch (active) {
      case "stopwatch":
        return <div className="h-screen flex items-center justify-center "><Stopwatch/></div> ;
        
      case "timer":
        return <div className="h-screen flex items-center justify-center "><Timer/></div> ;
      case "todo":
        return <h1>To Do</h1>;
      case "calculator":
        return <h1>Calculator</h1>;
      default:
        return <h1>Coming Soon</h1>;
    }
  };
 return(

    <div>
    <Navbar active={active} setActive={setActive} />
    <div className="p-6 text-center">{renderComponent()}</div>
  </div>
 )
}

export default App
