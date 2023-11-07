import "./App.css";
import Firstpage from "./components/firstpage";
import Secondpage from "./components/Secondpage";
import { useState } from "react";

function App() {

  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };

  return (
    <div className="App">
      {

        isGameStarted ? <Secondpage /> : <Firstpage toggle={toggleGamePlay}/>

      } 
        
     
    </div>
  );
}

export default App;
