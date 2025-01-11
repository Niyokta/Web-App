

export async function POST(request: Request) {
  try {

    const reqBody = await request.json();
    const { projectId } = reqBody
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/project/getProject`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
        "credentials":"include"
      },
      body: JSON.stringify({
        projectID: projectId
      })
    })
    const res = await response.json();
    return Response.json(res);

  } 
  catch (err: any) {
    return Response.json({ status: "400", message: err.message });
  }
}
