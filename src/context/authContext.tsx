"use client"
import React,{createContext,useContext,useState} from "react";

type AuthType={
  isloggedin:boolean,
  setisloggedin:(value:boolean)=>void
}
const AuthContext=createContext<AuthType|undefined>(undefined)

export const AuthProvider=({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)=>{

    const [isloggedin,setisloggedin]=useState(false)

    return(
        <AuthContext.Provider value={{isloggedin,setisloggedin}}>
          {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
  return useContext(AuthContext);
}