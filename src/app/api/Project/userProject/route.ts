import { NextResponse } from 'next/server';

import { cookies } from 'next/headers';

export async function GET(request: Request) {
  try {
    const cookiestore = cookies();
    const accessToken = cookiestore.get('accessToken')?.value
    if (!accessToken) {
      return Response.json({
        status: "400",
        message: "No token found"
      })
    }
    const response = await fetch('http://3.6.34.255:3000/api/v1/project/getProjects', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'authorization': accessToken

      }, body: JSON.stringify({
        cleintID:'12'   
        
    })
    })
    const res = await response.json();
    console.log(res);
    return Response.json(res);
  } catch (err: any) {
    return Response.json({ status: "400", message: err.message });
  }
}