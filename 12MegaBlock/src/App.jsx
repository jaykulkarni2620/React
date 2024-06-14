import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import authService from './appwrite/authservice'
import { login, logout} from './store/authSlice'
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  // loading state banvnar karan application data fetch karnar tar appwrite ko localstorage me to rakha nahi hai to uske liye time lagega, same for database or network madhun kahi gheyaych asel tar time lagto, tar ashya veli "conditional rendering karu shakto using if/else ke loading true ahe tr loading icon dakhvnar as"

  const [ loading, setLoading] = useState(true);

  //for sending data in store 
  const dispatch = useDispatch()

  // checking the user log in or not using the useEffect()
  //.then means if is run then what to do
  // .finally:- .then ho .catch ho .finally hamesha run hota he hai

  useEffect(() => {

    authService.getCurrentUser()
    // humlog ko data or userdata milta hai
    .then( (userData) => {
      if (userData) {
        dispatch(login({ userData }))
      } else {
        dispatch(logout())
      }
    })
    // setloading la false kel
    .finally( ()=> setLoading(false))
    
  },[])

  //frontend view reverse stament or condition means jar loading true asel tar false kar 
  return !loading ? (<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
  <div className="w-full">
      <Header />
      <main>
      TODO{/* < Outlet /> */  }
      </main>
      <Footer />
    </div>
  </div>) : (null)
}

export default App
