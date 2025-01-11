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
    const userResponse=await fetch('http://3.6.34.255:3000/api/v1/user/getuser',{
      method:'GET',
      credentials:'include',
      headers:{
          'X-Client-Type':'mobile',
          'authorization':accessToken
      }
  })
  // console.log("user - Response         : ",userResponse);
  const userDetails = await userResponse.json();
  // console.log("userResponse : ",userDetails.user);
  // console.log(userDetails.user.projects);
    // const response = await fetch('http://3.6.34.255:3000/api/v1/project/getProjects', {
    //   method: "POST",
    //   credentials: "include",
    //   headers: {
    //     "content-type": "application/json",
    //     "credentials":"include"
    //   },
    //   body: JSON.stringify({
    //     clientID : userDetails.user.userDetails
    //   })
    // })
    // console.log("Response:         : ",response)
    // const res = await response.json();
    // console.log("JSon response :      : ",res);
    return Response.json(userDetails.user);
  } catch (err: any) {
    return Response.json({ status: "400", message: err.message });
  }
}