'use client'

import React from "react";
import { TbLoader3 } from "react-icons/tb";
import { useRouter } from "next/navigation";
export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    const router=useRouter();
    const [loading,setloading]=React.useState(true);

    React.useEffect(()=>{
      async function authVerification(){
        await fetch('/api/Auth/VerifyLogin',{
          method:'GET',
          credentials:'include'
        })
        .then((res)=>res.json())
        .then((res)=>{
          console.log(res);
          if(res.status=="200") router.replace('/dashboard')
          else setloading(false)
        })
        .catch((err)=>setloading(false))
      }
      authVerification();
    },[])
    return(
        loading?(
          <TbLoader3 className="w-[50px] h-[50px] animate-spin mx-auto mt-[100px]"/>
        ):(
          children
        )
    )
}

