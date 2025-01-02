'use client'
import React from "react";
import { useAppDispatch,useAppSelector } from "@/lib/reduxHooks";
import {ImStarEmpty,MdOutlineHourglassEmpty} from '@/components/general/reacticons'
export default function BidStats(){
    const bids=useAppSelector(state=>state.user.bids);
    const ongoing=bids.filter(s=>s.status==="pending");
    const completed=bids.filter(s=>s.status!="pending");
    return(
        <div className="w-[30%] h-full rounded-md shadow-sm shadow-[#6a6a6a] p-[20px]">
            <p className="text-center text-[30px]">Freelancer Rating</p>
            <p className="text-center text-[30px] flex items-center justify-center"><ImStarEmpty className="w-[15px] h-[15px]"/> <span className="px-[5px]">0</span> <ImStarEmpty className="w-[15px] h-[15px]"/></p>
            <p className="text-center text-[20px] pb-[20px] font-medium">( Beginner )</p>
            <div className="w-[200px] h-[40px] bg-[#363636] mx-auto rounded-[50px] flex items-center justify-center text-white font-bold">Total Bids : {bids.length}</div>
            <div className="w-full pt-[50px] border-b-[1px] border-[#e1e1e1] pl-[10px] pr-[20px] font-medium flex justify-between"><p>Bids Ongoing</p> <p>{ongoing.length}</p></div>
            <div className="w-full pt-[20px] border-b-[1px] border-[#e1e1e1] pl-[10px] pr-[20px] font-medium flex justify-between"><p>Bids Completed</p> <p>{completed.length}</p></div>
            <p className="mt-[50px] pt-[50px] text-[20px] font-medium text-center border-t-[1px] border-[#e1e1e1]">Customer Reviews</p>
            {
                completed.length===0 ? (
                    <div className="h-[400px] items-center justify-center flex flex-col">
                        <MdOutlineHourglassEmpty className="w-[200px] h-[200px]"/>
                        <p className="text-[15px] font-medium pt-[20px]">Not enough reviews to show</p>
                    </div>
                ):(
                    // map the reviews when available
                    <div></div>
                )
            }
        </div>
    )
}