import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const cookiestore = cookies();
    const accessToken = cookiestore.get("accessToken")?.value;

    if (!accessToken) {
      return NextResponse.json({
        status: "400",
        message: "No token found",
      });
    }

    const { projectID } = await request.json();  // Parsing JSON body
    console.log("Project ID:", projectID.project_id);
    const apiVariable = Number(projectID.project_id);


    console.log("Api variable",apiVariable);

    const response = await fetch(
      "http://3.6.34.255:3000/api/v1/project/getProject",
      {
        method:'POST',
        credentials:'include',
        headers:{
            'content-type':'application/json',
            'authorization':accessToken
        },
        body: JSON.stringify({projectID:apiVariable }),
      }
    );

    const res = await response.json();
    console.log("API Response:", res.message);
 
    return NextResponse.json(res);  // Use NextResponse.json
  } catch (err: any) {
    console.error("Error:", err.message);
    return NextResponse.json({ status: "400", message: err.message });
  }
}
