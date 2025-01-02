import React from "react";
type singleBid={
    project_title:string,
    description:string,
    bid_id:number,
    status:string,
    completion_time:string
}
export default function BidBox({bid}:{bid:singleBid}){
    return(
        <div className="w-full h-[200px] hover:bg-[#f7f7f7] mt-[20px] rounded-md p-[50px] shadow-sm shadow-[#e1e1e1]">
            <p className="text-[20px] font-medium">{bid.project_title.length > 100 ? bid.project_title.slice(100)+" ...... ":bid.project_title}</p>
            <p className="text-[15px] font-light">{bid.description.length > 200 ? bid.description.slice(200)+" ...... ":bid.description}</p>
            <p className="text-[15px] pt-[30px] font-light">Status : {bid.status==="pending"?(<span className="font-bold text-black">Pending</span>):(<span>{bid.status}</span>)}</p>
        </div>
    )
}