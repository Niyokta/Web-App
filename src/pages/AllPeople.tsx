'use client'
import React from "react";

export default function AllPeople(){
    const [loading,setloading]=React.useState<true | false>(true);
    const [users,setusers]=React.useState([{
        username:"",
        email:"",
        country:"",
        workingHours:""
    }]);
    const getAllUsers=async()=>{
        const allUsers=await fetch(`/api/User/GetAllUsers`,{
            method:"GET",
            credentials:"include"
        })
        const res=await allUsers.json();
        console.log(res)
        if(res.status==="200"){
            setusers(res.users)
            setloading(false);
        }
        
    }
    React.useEffect(()=>{
        getAllUsers();
        
    },[])
    return(
        loading?(
            <div>
                Loading ...
            </div>
        ):(
            <div>
                {
                    users.length===0?<p>Length 0</p>:users.map((user,index)=>{
                        return(
                            <div key={index}>
                                {user.username}
                            </div>
                        )
                    })
                }
            </div>
        )

    )
}
