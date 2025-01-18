import React from "react";
import { TbLoader3 } from "@/components/general/reacticons"

export default function GeneralLoader() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <TbLoader3 className="w-[50px] h-[50px] animate-spin"/>
        </div>
    )
}