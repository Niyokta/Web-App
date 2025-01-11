"use client";
import { useParams } from "next/navigation";
import ProjectDetail from "@/components/Projects/projectDetails";
import { useEffect, useState } from "react";
export type ResponseData = {
  project?: any;
  error?: string;
};
const Page = () => {
  const params = useParams<{ projectID: string }>();
  const projectID = params;
  const [response, setResponse] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState(true);
  // console.log(projectID);
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const res = await fetch("/api/Project/username/project", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ projectID }),
        });
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        setResponse({ error: "An error occurred", project: null });
      } finally {
        setLoading(false);
      }
    };

    if (projectID) {
      fetchProjectDetails();
    }
  }, [projectID]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : response?.error ? (
        <p>{response.error}</p>
      ) : (
        <ProjectDetail project={response?.project} />
      )}
    </div>
  );
};

export default Page;
