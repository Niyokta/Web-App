import { cookies } from "next/headers";

export async function POST(request:Request){
    try{
        const cookiestore=cookies();
        const requestbody = await request.json();

        const { coursename, yearfrom, yearto, institute } = requestbody;
        const accessToken=cookiestore.get('accessToken')?.value
        if(!accessToken){
            return Response.json({
                status:"400",
                message:"No token found"
            })
        }
        const response=await fetch('http://3.6.34.255:3000/api/v1/user/addEducation',{
            method:'POST',
            credentials:'include',
            headers:{
                'X-Client-Type':'mobile',
                'authorization':accessToken
            },
            body:JSON.stringify({
                cname:coursename,
                from:yearfrom,
                to:yearto,
                institute:institute
            })

        })
        const res=await response.json();
        return Response.json(res);


    }   
    catch(err:any){
        Response.json({satus:"400",message:err.message});
    }
}