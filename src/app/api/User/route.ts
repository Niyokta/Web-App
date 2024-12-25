import { cookies } from "next/headers";

export async function GET(request:Request) {
    const cookiestore=cookies();
    try{
        const accessToken=cookiestore.get('accessToken')?.value
        if(!accessToken){
            return Response.json({
                status:"400",
                message:"No token found"
            })
        }
        const response=await fetch('http://3.6.34.255:3000/api/v1/user/getuser',{
            method:'GET',
            credentials:'include',
            headers:{
                'X-Client-Type':'mobile',
                'authorization':accessToken
            }
        })

        const res=await response.json();
        return Response.json(res)
        
    }
    catch(err:any){
        return Response.json({
            status:"400",
            message:err.message
        })
    }
}