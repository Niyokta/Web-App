'use client'

import ProjectCard from '@/components/Projects/ProjectCard';
import { useEffect, useState } from 'react';


interface Project {
  id: string;
  title: string;
  name: string;
  country: string;
  minimumData: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
      
      
      
        const response = await fetch('api/Project/allProjects',{
          method: 'GET',
   
          headers: {
            'content-type':'application/json',
              },
        });
        const data = await response.json();
        console.log(data);
        console.log(response);
        setProjects(data.projects || []);  // Adjust property name based on API response structure
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Project List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}