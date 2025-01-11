
import React from "react";
import { UserProfile } from "@/components";
export default async function Page({params}:{params:Promise<{username:string}>}){
    const username=(await params).username;
    return(
        <UserProfile username={username}/>
    )
}