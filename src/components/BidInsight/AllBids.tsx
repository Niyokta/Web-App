'use client'
import React from "react"
import { useAppSelector } from "@/lib/reduxHooks"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import BidBox from "./BidBox"

export default function AllBids() {
    const [currfilter, setcurrfilter] = React.useState("all")
    const bids = useAppSelector(state => state.user.bids);
    const ongoing = bids.filter(s => s.status === "pending");
    const completed = bids.filter(s => s.status != "pending");
    return (
        <div className="ml-[10px] h-[full] w-[70%] rounded-md shadow-sm shadow-[#6a6a6a] p-[20px]">
            <div className="flex w-full justify-end">
                <Select onValueChange={(value) => setcurrfilter(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Bids</SelectItem>
                        <SelectItem value="ongoing">Ongoing Bids</SelectItem>
                        <SelectItem value="completed">Completed Bids</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            {
                currfilter==="all"?(
                    bids.map((bid,index)=>{
                        return(
                            <BidBox key={index} bid={{project_title:"This is the title of the bid and is currently unavailable",description:bid.proposal,bid_id:bid.bid_id,status:bid.status,completion_time:bid.completion_time}}/>
                        )
                    })
                ):currfilter==="ongoing"?(
                    ongoing.map((bid,index)=>{
                        return(
                            <BidBox key={index} bid={{project_title:"This is the title of the bid and is currently unavailable",description:bid.proposal,bid_id:bid.bid_id,status:bid.status,completion_time:bid.completion_time}}/>
                        )
                    })
                ):completed.map((bid,index)=>{
                    return(
                        <BidBox key={index} bid={{project_title:"This is the title of the bid and is currently unavailable",description:bid.proposal,bid_id:bid.bid_id,status:bid.status,completion_time:bid.completion_time}}/>
                    )
                })
            }
        </div>
    )
}