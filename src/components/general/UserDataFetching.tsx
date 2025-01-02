'use client'
import React from "react";
import { useAppDispatch,useAppSelector } from "@/lib/reduxHooks";
import { updateUser } from "@/lib/features/userdetails";
export default function UserDataFetching() {
    const dispatch=useAppDispatch();
    const user=useAppSelector(state=>state.user.userName);
    const fetchdata = async () => {
        if(user!=="") return;


        //  ---------------- If you need to persist the user data even after refresh and make no api calls after every refresh, uncomment below (written by - Sahayak - not copied) ------------------
        
        // const userinlocal=localStorage.getItem('UserInfo')
        // console.log(userinlocal)
        // if(userinlocal){
        //     const userdata=JSON.parse(userinlocal)
        //     const payload={
        //         id:userdata.id,
        //         username:userdata.username,
        //         phone:userdata.phoneNumber,
        //         education:userdata.education,
        //         experience:userdata.experience,
        //         email:userdata.email,
        //         projects:userdata.projects,
        //         bids:userdata.bids
        //     }
        //     console.log("I know you did refresh....Getting data from local storage")
        //     dispatch(updateUser(payload));
        //     return;
        // };
        await fetch('/api/User', {
            method: 'GET',
            credentials: 'include'
        })
        .then((res => res.json()))
        .then((res) => {
            if (res.status == "200") {
                const payload={
                    id:res.user.id,
                    username:res.user.username,
                    phone:res.user.phoneNumber,
                    education:res.user.educations,
                    experience:res.user.experiences,
                    email:res.user.email,
                    projects:res.user.projects,
                    bids:res.user.bids
                }
                localStorage.setItem('UserInfo',JSON.stringify(payload))
                dispatch(updateUser(payload));
            }
        })
    }
    
    React.useEffect(() => {
        fetchdata()
    }, [])
    return (
        <></>
    )
}