

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
  catch(err){
    if(err instanceof Error){
        return Response.json({status:"400",message:err.message})
    }
    else return Response.json({status:"400",message:"Unexpected Server Error"})
}
}
