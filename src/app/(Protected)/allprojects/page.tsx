'use client'
import React from 'react';
import ProjectCard from '@/components/Projects/ProjectCard';
import { Checkbox } from "@/components/ui/checkbox"
import { AllProjectsLoader } from '@/components';
export default function Home() {
  const [loading,setloading]=React.useState<true | false>(true)
  const [projects, setProjects] = React.useState([{
    project_id:0,
    title:"",
    client_name:"",
    client_country:"",
    min_budget:"",
    skills_required:[],
    category:[]
  }]);
  const [filter,setfilter]=React.useState<string[]>([])

  React.useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('api/Project/allProjects',{
          method: 'GET',
          credentials:"include"
        });
        const data = await response.json();

        if(data.status==="200") setloading(false);
        setProjects(data.projects); 
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      }
    }

    fetchProjects();
  }, []);

  return (
    loading?(
      <AllProjectsLoader/>
    ):
    <div>
      <div className='w-full h-[100px] flex items-center justify-end'>
        <Checkbox className='w-[15px] h-[15px]' onCheckedChange={()=>{
          if(filter.includes("Web Development")){
            const temp=filter.filter(s=>s!="Web Development");
            setfilter(temp);
          }
          else{
            setfilter([...filter,"Web Development"])
          }
        }}/> <p className='px-[10px] font-light text-[13px]'>Web Development</p>
        <Checkbox className='w-[15px] h-[15px]' onCheckedChange={()=>{
          if(filter.includes("Graphic Design")){
            const temp=filter.filter(s=>s!="Graphic Design");
            setfilter(temp);
          }
          else{
            setfilter([...filter,"Graphic Design"])
          }
        }}/> <p className='px-[10px] font-light text-[13px]'>Graphic Design</p>
        <Checkbox className='w-[15px] h-[15px]' onCheckedChange={()=>{
          if(filter.includes("Android Development")){
            const temp=filter.filter(s=>s!="Android Development");
            setfilter(temp);
          }
          else{
            setfilter([...filter,"Android Development"])
          }
        }}/> <p className='px-[10px] font-light text-[13px]'>Android Development</p>
      </div>
     
      <div className='grid grid-flow-row grid-col-1 md:grid-cols-2 gap-10'>
        {projects.map((project,index) => (
          <ProjectCard key={index} project_id={project.project_id} filter={filter} skills={project.skills_required} category={project.category} title={project.title} client_name={project.client_name} client_country={project.client_country} min_budget={project.min_budget} />
        ))}
      </div>
    </div>
  );
}