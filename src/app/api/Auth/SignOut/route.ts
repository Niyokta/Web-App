import { cookies } from "next/headers";

export async function GET(request: Request) {
    try {
        const cookiestore = cookies();
        cookiestore.delete('accessToken');
        cookiestore.delete('refreshToken');
        return Response.json({ status: "200", message: "Logged Out Successfully" });
    }
    catch(err:any){
        Response.json({status:"400",message:err.message});
    }
}