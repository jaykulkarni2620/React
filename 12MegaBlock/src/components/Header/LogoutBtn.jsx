import React from "react";
//Dispatch - Think of it as a way to tell Redux to do something, like changing the state. current value ko state me update karo
import { useDispatch} from 'react-redux'
import { authService} from '../../appwrite/authSlice'
import { logout } from '../../store/authSlice'

//once logout done then next
// basically we are creating the logout button ... authservice madhun logout ghet ahot ani logout zal ke dispatch call karun state madhe update karat ahe apan

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then( ()=> {
            dispatch(logout())
        })
    }
    return(
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">Logout</button>
    )
}

export default LogoutBtn;