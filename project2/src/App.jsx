
import './App.css'
import Navigation from './components/Navigation/Navigation2'
import Hero from './components/Hero/Hero'
import Button from './components/Button/Button'

function App() {
  return (
    <>
   <Navigation/>
   <Hero/>
   <Button text="VIA SUPPORT CHAT"/>
   <Button text="VIA CALL"/>
   <Button 
   isOutline={true}
   text="VIA EMAIL FORM"/>
   </>
  )
}

export default App
