import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookiestore = cookies();
  const accessToken = cookiestore.get('accessToken');
  cookiestore.set('name','sahayak')
  if (!accessToken) return Response.json({ status:"400",message: "no access token" })
  await fetch('http://3.6.34.255:3000/api/v1/auth/verifyToken', {
    method: 'GET',
    credentials: 'include',
    headers: {
      'user-agent': 'mobile',
      'X-Client-Type' : 'mobile',
      'authorization': accessToken.toString()
    }
  })
    .then((res) => res.json())
    .then((res) => {
    });

  return Response.json({
    messaghe: "hello"
  })
}