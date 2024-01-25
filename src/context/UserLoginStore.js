import React,{useContext, useState} from 'react';
import { userLoginContext } from './userLoginContext';
export default function UserLoginStore({children}) {
    let [loginStatus,setLoginStatus] = useState(false);
    let [currentUser,setCurrentUser] = useState({});
    

    return (
    <userLoginContext.Provider value={{loginStatus,setLoginStatus,currentUser,setCurrentUser}}>{children}</userLoginContext.Provider>
  );
}


