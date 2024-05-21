// import { useState } from 'react'
import { useState } from 'react'
import './App.css'


function App() {

const [color, setColor] = useState('olive');

  return (
  <div className="w-full h-screen"
    
  style={{backgroundColor: color}}>
    <h1>Hello World</h1>

  <div>
    <button
    className='cursor-pointer '
    style={{backgroundColor:"red"}}
    onClick={ () => setColor("red")}>
      red
    </button>

    <button style={{backgroundColor:"yellow"}}
    onClick={ () => setColor("yellow")}>
     Yellow
    </button>

    <button style={{backgroundColor:"green"}}
    onClick={ () => setColor("green")}>
      green
    </button>

    <button style={{backgroundColor:"blue"}}
    onClick={() => setColor("blue")}>
      blue
    </button>
  </div>
  </div>
  )
}

export default App
