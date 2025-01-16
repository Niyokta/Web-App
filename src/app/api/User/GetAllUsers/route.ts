import { cookies } from "next/headers"
export async function GET(){
    try{
        const cookiestore=cookies();
        const accessToken= cookiestore.get("accessToken")?.value;
        if(!accessToken) return Response.json({
            status:"400",
            message:"You are not Logged in"
        })
        const response=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/user/getAllUsers`,{
            method:'GET',
            credentials:"include",
            headers:{
                authorization: accessToken
            }
        })
        const res=await response.json();
        return Response.json(res);
    }
    catch(err){
        if(err instanceof Error)
         return Response.json({
            status:"400",
            message:err.message
        })
        else return Response.json({
            status:"400",
            message:"Internal Server Error"
        })
    }
}