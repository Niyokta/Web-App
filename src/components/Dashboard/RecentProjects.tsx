'use client'
import React from "react";
import { useAppSelector } from "@/lib/reduxHooks";
import ProjectsMap,{NoProjects} from "./ProjectsMap";
export default function RecentProjects(){
    const projects=useAppSelector(state=>state.user.projects)
    const username=useAppSelector(state=>state.user.userName)
    const sortedProjects=[...projects].reverse();
    const topfive=sortedProjects.slice(0,5);
    return(
        <div className="mt-[50px]">
            <p className="text-[30px] pt-[30px] font-bold text-center">Recent Projects</p>
            {
                username=="" ? <NoProjects/> : <ProjectsMap projects={topfive}/>
            }
        </div>
    )
}