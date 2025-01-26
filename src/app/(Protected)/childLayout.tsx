'use client'
import React from "react";
import { useAppSelector } from "@/lib/reduxHooks";
import GeneralLoader from "@/components/general/GeneralLoader";
export default function ChildLayout({children}:{children:React.ReactNode}){
    const username=useAppSelector(state=>state.user.userName);

    return(
        username==""?<GeneralLoader/>:(
            <div>
                {children}
            </div>
        )
    )
}