import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const requestbody = await request.json();

        const { Username, Email, Password } = requestbody
        
        const response=await fetch('http://3.6.34.255:3000/api/v1/auth/create-account',{
            method:'POST',
            credentials:'include',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                username:Username,
                password:Password,
                email:Email
            })
        })

        const res=await response.json();

        return Response.json({
            status:res.status,
            message:res.message
        })
    }
    catch (err) {
        return Response.json({
            status: "23",
            message: "asdf"
        })
    }
}