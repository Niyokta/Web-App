import { headers } from "next/headers";
import { cookies } from "next/headers";
export async function GET(request: Request) {
    const headerlist = headers();
    const cookiestore = cookies();
    const username = headerlist.get('Username');
    const password = headerlist.get('Password');

    if (!username || !password) return Response.json({
        status: "400",
        message: "invalid credentials"
    })

    try {
        const response = await fetch('http://3.6.34.255:3000/api/v1/getProjects', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cleintID: username,
      
            })
        })
        const res = await response.json();
  
        return Response.json({
            status: res.status,
            message: res.message
        })
    }
    catch (err:any) {
        return Response.json({
            status:"400",
            message:err.message
        })
    }

}