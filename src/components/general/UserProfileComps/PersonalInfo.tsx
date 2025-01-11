import React from "react";
type Payload={
    phoneNumber:string,
    DOB:string,
    workingHours:string,
    country:string,
    freelancer_rating:string
}
export default function PersonalInfo({payload}:{payload:Payload}){
    return(
        <div className="w-full text-[15px] pt-[20px]">
            <span className="flex items-center"><p className="pr-[10px]">Freelancer Rating</p><p className="text-blue-600 font-bold">{payload.freelancer_rating}</p></span>
            <span className="flex items-center"><p className="pr-[10px]">Birth Date</p><p className="text-blue-600 font-bold">{payload.DOB}</p></span>
            <span className="flex items-center"><p className="pr-[10px]">Country</p><p className="text-blue-600 font-bold">{payload.country}</p></span>
            <span className="flex items-center"><p className="pr-[10px]">Contact Number</p><p className="text-blue-600 font-bold">{payload.phoneNumber}</p></span>
            <span className="flex items-center"><p className="pr-[10px]">Working Hours</p><p className="text-blue-600 font-bold">{payload.workingHours}</p></span>
        </div>
    )
}
