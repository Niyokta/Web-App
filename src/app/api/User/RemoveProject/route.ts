
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const requestBody = await request.json();
        const cookiestore = cookies();
        const { projectID } = requestBody
        const accessToken = cookiestore.get('accessToken')?.value;
        if (!accessToken) {
            return Response.json({
                status: "400",
                message: "You are logged out"
            })
        }
        const response = await fetch('http://3.6.34.255:3000/api/v1/project/deleteProject', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': accessToken
            },
            body: JSON.stringify({
                projectID: projectID
            })
        })
        const res = await response.json();
        return Response.json(res);
    }
    catch (err: any) {
        return Response.json({ status: "400", message: err.message });
    }
}