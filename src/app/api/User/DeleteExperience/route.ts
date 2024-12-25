import { cookies } from "next/headers";

export async function POST(request:Request){
    try{
        const cookiestore=cookies();
        const requestBody=await request.json();
        const {experienceId}= requestBody;
        console.log("experience id is : ",experienceId)
        const accessToken=cookiestore.get('accessToken')?.value;
        if(!accessToken){
            return Response.json({status:"400",message:"You are not Logged In"})
        }
        const response=await fetch('http://3.6.34.255:3000/api/v1/user/deleteExperience',{
            method:'POST',
            headers:{
                'authorization':accessToken,
                'content-type':'application/json',
                'X-Client-Type':'mobile',
            },
            body:JSON.stringify({
                experienceId:experienceId
            })

        })
        const res=await response.json();
        return Response.json(res)
    }
    catch(err:any){
        return Response.json({status:"400",message:err.message});
    }
}