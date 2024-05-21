
import { useState } from 'react';
import './App.css'

function App() {

  const [number, setnumber] = useState(15);

  const addValue = () => {
      setnumber( number + 1);
    // counter = counter + 1;
    console.log("counter value", number);
  }


  const decreaseValue = () => {
    setnumber( number - 1);
  // counter = counter + 1;
  console.log("counter value", number);
}



  return (
    
      <div>
        <h1>Chai aur React</h1>
        <h2>Counter Value: {number}</h2>
  
      <button onClick={addValue } >Add Value</button>
      <button  onClick={decreaseValue}>Remove Value</button>

      </div>
    
  )
}

export default App
