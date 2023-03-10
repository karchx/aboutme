import {useState} from "react";
import Typewriter from "typewriter-effect";
import './App.css'
import CardLinks from "./components/CardLinks";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="App">
        <Typewriter
          onInit={(typewriter) => {

            typewriter
              .typeString("About me...")
              .pauseFor(1000)
              .deleteAll()
              .typeString("kabout --help")
              .callFunction(() => setShowInfo(true))
              .start();
          }}
        />
      </div>

      {
        showInfo ? <CardLinks /> : null
      }
    </>
  )
}

export default App
