import {useState} from "react";
import Typewriter from "typewriter-effect";
import './App.css'
import CardLinks, {LinkCard} from "./components/CardLinks";

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const links: LinkCard[] = [
    {
      url: "https://github.com/karchx",
      description: "Github"
    },
    {
      url: "https://twitter.com/keneth_stiv",
      description: "Twitter"
    },
    {
      url: "https://stiv-dev.vercel.app/",
      description: "Portafolio",
    }
  ];

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
        showInfo ? <CardLinks links={links} /> : null
      }
    </>
  )
}

export default App
