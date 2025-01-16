import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function UserProfileLoader() {
    return (
        <div className="w-full h-full">
            <div className="p-[20px] rounded-md h-[285px]" style={{ boxShadow: "1px 1px 5px 1px #eeeeee" }}>
                <Skeleton className="w-[400px] h-[100px]"/>
                <Skeleton className="w-[300px] h-[20px] mt-[10px]"/>
                
            </div>

            {/* socials */}
            <div className="w-full font-light text-[13px] mt-[20px] p-[20px] rounded-md" style={{ boxShadow: "1px 1px 5px 1px #eeeeee" }}>
                <p className="font-bold text-[20px] pb-[10px] mb-[20px] border-b-2 border-[#eeeeee]">Socials</p>
                <div className=" w-[300px] flex justify-between">
                    <Skeleton className="w-[70px] h-[70px]" />
                    <Skeleton className="w-[70px] h-[70px]" />
                    <Skeleton className="w-[70px] h-[70px]" />
                </div>
            </div>
            {/* experience  */}
            <div className="w-full font-light text-[13px] mt-[20px] p-[20px] rounded-md" style={{ boxShadow: "1px 1px 5px 1px #eeeeee" }}>
                <p className="font-bold text-[20px] pb-[10px] mb-[20px] border-b-2 border-[#eeeeee]">Experience</p>
                <Skeleton className="w-[300px] h-[100px] text-[12px] mb-[10px] p-[10px]">

                </Skeleton>
            </div>

            {/* Education  */}
            <div className="w-full font-light text-[13px] mt-[20px] p-[20px] rounded-md" style={{ boxShadow: "1px 1px 5px 1px #eeeeee" }}>
                <p className="font-bold text-[20px] pb-[10px] mb-[20px] border-b-2 border-[#eeeeee]">Education</p>
                <Skeleton className="w-[300px] h-[100px] text-[12px] mb-[10px] p-[10px]">

                </Skeleton>
            </div>
        </div>
    )
}