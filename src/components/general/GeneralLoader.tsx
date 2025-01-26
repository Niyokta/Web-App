import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function GeneralLoader() {
    return (
        <div className="w-full h-full">
            <Skeleton className="w-full h-[200px] bg-[#eeeeee] mt-[20px]"/>
            <Skeleton className="w-full h-[400px] bg-[#eeeeee] mt-[20px]"/>
            <Skeleton className="w-full h-[100px] bg-[#eeeeee] mt-[20px]"/>
            <Skeleton className="w-full h-[100px] bg-[#eeeeee] mt-[20px]"/>
        </div>
    )
}