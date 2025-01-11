
export async function POST(request:Request){
    try{
        const req=await request.json();
        const {username}=req;
        const user=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/user/getUserByUsername`,{
            method:"POST",
            credentials:"include",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                username:username
            })
        })
        const res=await user.json();
        return Response.json(res);
    }
    catch(err){
        return Response.json({status:"400",message:err instanceof Error?err.message:"Internal Server Error"})
    }
}