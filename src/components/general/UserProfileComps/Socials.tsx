import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "../reacticons"
export default function Socials({ linkedin, github, x }: { linkedin: string, github: string, x: string }) {
    return (
        <div className="w-full font-light text-[13px] mt-[20px] p-[20px] rounded-md" style={{ boxShadow: "1px 1px 5px 1px #eeeeee" }}>
            <p className="font-bold text-[20px] pb-[10px] mb-[20px] border-b-2 border-[#eeeeee]">Socials</p>
            <div className=" w-[300px] flex justify-between">
                <Link href={linkedin}><FaLinkedinIn className="w-[40px] h-[40px]"/></Link>
                <Link href={github}><FaGithub className="w-[40px] h-[40px]"/></Link>
                <Link href={x}><FaXTwitter className="w-[40px] h-[40px]"/></Link>
            </div>
        </div>
    )
}