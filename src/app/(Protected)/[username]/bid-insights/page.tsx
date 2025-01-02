import React from "react";
import { BidStats,AllBids } from "@/components";
export default function BidInsights(){
    return(
        <div className="w-full h-screen flex pt-[20px] pb-[20px]">
            <BidStats/>
            <AllBids/>
        </div>
    )
}