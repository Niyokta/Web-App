import React from "react";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "./reacticons"
type Payload = {
    username: string,
    email: string,
    linkedin: string,
    github: string,
    x: string,
    DOB: string,
    workingHours: string,
    phoneNumber: string,
    country: string
}
export default function UserCard({ payload ,filter}: { payload: Payload,filter:string }) {
    return (
        <div className="hover:bg-[#eeeeee] p-[20px] rounded-md text-light text-[12px]" style={{ boxShadow: "1px 1px 5px 1px #eeeeee" ,display:filter===""?"block":payload.username.includes(filter)?"block":"none"}}>
            <p className="text-[20px] font-medium">{payload.username.length > 20 ? payload.username.slice(0, 20) : payload.username}</p>
            <p className="text-[12px]">{payload.country===""?"India":payload.country}</p>
            <span className="flex w-[60px] justify-between items-center mt-[10px]">
                <FaLinkedinIn className="w-[12px] h-[12px] cursor-pointer"/>
                <FaGithub className="w-[12px] h-[12px] cursor-pointer"/>
                <FaXTwitter className="w-[12px] h-[12px] cursor-pointer"/>
            </span>
            <p className="pt-[20px] underline underline-offset-2">D.O.B : {payload.DOB}</p>
            <p className="pt-[10px] underline underline-offset-2">Working Hours: {payload.workingHours}</p>
        </div>
    )
}