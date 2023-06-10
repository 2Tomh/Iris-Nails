import { createContext, useEffect, useState } from "react";
import { userInfo } from "../utils/user";

export const UserContext = createContext()
const UserContextProvider = (props) => {
    const [user, setUser] = useState();
    
    useEffect(()=>{
        setUser(userInfo());
        
    },[])
    
    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;