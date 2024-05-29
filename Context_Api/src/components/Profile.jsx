import React, {useContext} from "react"
import { UserContext } from "../context/UserContext"; // Correct import for named export

function Profile () {

    const {user} = useContext(UserContext)
 
      if(!user) return <div>Please Log in</div>
    
      return <div>Welcome {user.username}</div>
}

export default Profile