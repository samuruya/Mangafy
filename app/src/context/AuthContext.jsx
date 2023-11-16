import { createContext, useCallback, useEffect, useState } from "react";
import { baseURL, postRequest } from "../utils/services";
import { json } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false)
    const [registerInfo, setRegisterInfo] = useState({
        tag: "",
        email: "",
        password: "",
        regToken: "",
    });
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setIsLoginLoading] = useState(false)
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    const [mangaError, setMangaError] = useState(null);
    const [mangaInfo, setMangaInfo] = useState({
        name: "",
        autor: "",
        caption: "",
        thumbnail: "",
        pages: []
    }) 
    

    useEffect(() => {
        const user = localStorage.getItem("User")

        setUser(JSON.parse(user))
    },[])


    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, [])

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, [])

    const updateMangaInfo = useCallback((info) => {
        setMangaInfo(info)
    }, [])

    const updatePfp = useCallback((info) => {
        newPfp(info);
    })

    const registerUser = useCallback(async(e) => {
        e.preventDefault()

        setIsRegisterLoading(true)
        setRegisterError(null)
        const res = await postRequest(
            `${baseURL}/users/register`,
            JSON.stringify(registerInfo),
        )

        setIsRegisterLoading(false)
        
        if(res.error){
            return setRegisterError(res)
        }


        localStorage.setItem("User", JSON.stringify(res))
        setUser(res)
    }, [registerInfo]
    );

    const loginUser = useCallback(async(e) => {

        e.preventDefault()

        setIsLoginLoading(true)
        setLoginError(null)

        const res = await postRequest(
            `${baseURL}/users/login`,
            JSON.stringify(loginInfo),
        )

        setIsLoginLoading(false)
        if(res.error){
            return setLoginError(res)
        }

        localStorage.setItem("User", JSON.stringify(res))
        setUser(res)
    }, [loginInfo])

    const postManga = useCallback(async(e) => {
        e.preventDefault()

        setMangaInfo(prev => ({
            ...prev,
            autor: user._Id
        }))

        const res = await postRequest(
            `${baseurl}/m/post`,
            JSON.stringify(mangaInfo)
        )

        if(res.error)
            return setMangaError(res)
    })





    const logoutUser = useCallback(() => {
        localStorage.removeItem("User")
        setUser(null)
    })

    return <AuthContext.Provider value={{
                user,
                registerInfo,
                updateRegisterInfo,
                registerUser,
                registerError,
                isRegisterLoading,
                logoutUser,
                loginUser,
                loginError,
                loginInfo,
                updateLoginInfo,
                isLoginLoading,
                mangaInfo,
                mangaError,
                updateMangaInfo,
            }}>
                {children}
            </AuthContext.Provider>
}