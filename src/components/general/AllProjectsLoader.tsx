import React from "react";
import { Skeleton } from "../ui/skeleton";
export default function AllProjectsLoader(){
    return(
        <div className='grid grid-flow-row grid-col-1 md:grid-cols-2 gap-10'>
          <Skeleton className='bg-[#eeeeee] h-[150px]'/>
          <Skeleton className='bg-[#eeeeee] h-[150px]'/>
          <Skeleton className='bg-[#eeeeee] h-[150px]'/>
          <Skeleton className='bg-[#eeeeee] h-[150px]'/>
          <Skeleton className='bg-[#eeeeee] h-[150px]'/>
          <Skeleton className='bg-[#eeeeee] h-[150px]'/>
        </div>
    )
}