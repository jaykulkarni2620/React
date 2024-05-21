import Gameplay from "./components/Gameplay";
import Startgame from "./components/Startgame";
import { useState } from "react";


function App() {

const [isGameStarted, setIsGameStarted] = useState (false)

const togglegameplay = () => {
  setIsGameStarted((prev) => !prev )
}

return(
 <>
      {
        isGameStarted ? <Gameplay/> : <Startgame
        
        toggle={togglegameplay}
        
        />
      }
 </>
)
}

export default App
