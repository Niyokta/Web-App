import { headers } from "next/headers";
import { cookies } from "next/headers";
import { addeducation } from '@/lib/features/userdetails';
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
        const response = await fetch('http://3.6.34.255:3000/api/v1/auth/signin', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const res = await response.json();
        if (res.status == "200") {
            console.log(res.accessToken);
            cookiestore.set('accessToken', res.accessToken);
            cookiestore.set('refreshToken', res.refreshToken);

        }
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