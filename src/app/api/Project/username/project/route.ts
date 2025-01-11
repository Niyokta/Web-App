import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { projectID } = await request.json();  
    const apiVariable = Number(projectID.project_id);
    const response = await fetch(
      "http://3.6.34.255:3000/api/v1/project/getProject",
      {
        method:'POST',
        credentials:'include',
        headers:{
            'content-type':'application/json',
               },
        body: JSON.stringify({projectID:apiVariable }),
      }
    );

    const res = await response.json();
 
    return NextResponse.json(res);  // Use NextResponse.json
  } catch (err: any) {
    console.error("Error:", err.message);
    return NextResponse.json({ status: "400", message: err.message });
  }
}
