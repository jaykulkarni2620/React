// this file is for to protect the routes and pages , hulog conatainer bana rahe hai 
import React, { useEffect, useState } from "react"

//kuch chizze hume stores se puchne padhegi so using "useSelector"
import { useSelector } from "react-redux"

//navigation ke hum user ko redirect kar sakhte hai
import { useNavigate } from "react-router-dom"


export default function Protected({ children, authentication = true}) {

    const navigate = useNavigate();
    const [ loader, setLoader ] = useState(true)

    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {

        // // another method make it easy 
        // if (authStatus === true) {
        //     navigate('/')
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }

        //authentication = true && authStatus = false not equal to true === final result true // beacuse youre not authenticated
        if (authentication && authStatus !== authentication) {
            navigate("/login")

            // authentication = false , authStatus = true , authentication = true
            // true is not equal to true , statment wrong ... so false === false so redirect to home
        } else if( !authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader("false")
    }, 
    //authStatu madhe kahi changes zale kiva navigate madhe kahi changes zali ke punha method run kara
    [authStatus, navigate, authentication])

    // loader true ahe tr loading display kara ani loading true nahiye tr children display kara means text disply kara
    return loader ? <h1> loading </h1> : <>{children}</>
}
 