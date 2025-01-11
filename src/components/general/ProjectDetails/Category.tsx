import React from "react";

export default function Category({categories}:{categories:string[]}){
    return(
        <div className="w-full h-[70px] items-center text-[12px] md:text-[15px] grid grid-flow-row grid-cols-2 md:grid-cols-5">
            {
                categories.map((category,index)=>{
                    return(
                        <p key={index} className="px-[7px] py-[2px] bg-[#eeeeee] mr-[20px] rounded-md font-medium text-center">{category}</p>
                    )
                })
            }
        </div>
    )
}