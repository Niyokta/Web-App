import { cookies } from "next/headers";

export async function GET() {
    try {
        const cookiestore = cookies();
        cookiestore.delete('accessToken');
        cookiestore.delete('refreshToken');
        return Response.json({ status: "200", message: "Logged Out Successfully" });
    }
    catch(err){
        if(err instanceof Error){
            return Response.json({status:"400",message:err.message})
        }
        else return Response.json({status:"400",message:"Unexpected Server Error"})
    }
}