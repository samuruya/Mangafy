import {createContext, useCallback, useEffect, useState} from "react";

export const Auth = createContext();

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
    const [registerInfo, setRegisterInfo] = useState({
        tag: '',
        email: '',
        password: '',
        token: ''
    })
}

useEffect(() => {
    const user = localStorage.getItem("User")
    setUser(JSON.parse(user))
},[])




module.exports = {
    user,
    logInfo,
    regInfo,
}