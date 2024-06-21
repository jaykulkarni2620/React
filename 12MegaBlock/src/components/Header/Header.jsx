import React from 'react'
import { Container, Logo, LogoutBtn} from '../index';
import { Link } from 'react-router-dom';
// useSelector store me jake dekh pauga user login hai ya nahi
// useSelector allows you to read data from the Redux store. Think of it as a way to get the current state of something in Redux.
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Header () {

    //State madhun bahgav lagel user authnticated hai ya nahi 

    const authStatus = useSelector( (state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
          name: 'Home',
          slug: "/",
          active: true
        }, 
        {
          name: "Login",
          slug: "/login",
          active: !authStatus,
      },
      {
          name: "Signup",
          slug: "/signup",
          active: !authStatus,
      },
      {
          name: "All Posts",
          slug: "/all-posts",
          active: authStatus,
      },
      {
          name: "Add Post",
          slug: "/add-post",
          active: authStatus,
      },
      ]
    

    return (
       <header className=' py-3 shadow bg-gray-500'>
        
        <Container
        // container is like commponent its set the width and height to the div
        >
            <nav className='flex'>
                <div className='mr-4'>
                    <Link to='/'>
                        <Logo 
                        //overwrite the width
                        width='70px' />
                    </Link>
                </div>
                <ul className='flex ml-auto'>
                    
                    {navItems.map((item) => 
                    
                    //if it is active then do
                    item.active ? (
                        <li key={item.name}>
                            <button
                            onClick={ ()=> navigate(item.slug)}
                            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                            >{item.name}</button>
                        </li>
                    ) : null

                    )}

                    
                    {
                    // if the authstatus is true then only the method work
                    authStatus && (
                        <li>
                           <LogoutBtn/> 
                        </li>
                    )}
                   
                </ul>
            </nav>
        </Container>
       </header>
    )
}

export default Header;