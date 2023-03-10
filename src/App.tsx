import Typewriter from "typewriter-effect";
import './App.css'

function App() {
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
              .start();
          }}
        />
      </div>
    </>
  )
}

export default App
