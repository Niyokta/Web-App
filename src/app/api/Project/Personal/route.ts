import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const cookieStore = cookies();

  try {
    console.log("");
    const accessToken = cookieStore.get('accessToken')?.value;

    if (!accessToken) {
      return new Response(
        JSON.stringify({
          status: '400',
          message: 'No token found',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

   let username = '12'
    if (!username) {
      return new Response(
        JSON.stringify({
          status: '400',
          message: 'Username not found in cookies',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch('http://3.6.34.255:3000/api/v1/project/getProjects', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'authorization': accessToken
    },
      body: JSON.stringify({
        cleintID: username, 
      }),
    });
console.log(response);
    if (!response.ok) {
      const errorResponse = await response.json();
      return new Response(
        JSON.stringify({
          status: response.status,
          message: errorResponse.message || 'Failed to fetch projects',
        }),
        { status: response.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resData = await response.json();
    return new Response(JSON.stringify(resData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        status: '400',
        message: err.message || 'An error occurred',
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
