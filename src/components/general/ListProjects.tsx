import React from "react";

export async function getServerSideProps(){
    console.log("Working in console")
    const res=await fetch("http://3.6.34.255:3000/api/v1/project/getProjects",{
        method:'POST',
        credentials:'include'
    })
    const response=await res.json();
    console.log("Logging ... ",response)
    return {
        props:{
            response
        }
    }
}
export default function ListProjects(props:any){
    console.log(props)
    return <div>

    </div>
}