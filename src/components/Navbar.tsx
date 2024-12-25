'use client'
import React from "react";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast";
export default function Navbar() {
    const {toast}=useToast();
    const router = useRouter();
    const handlesignout=async ()=>{
        const response=await fetch('/api/Auth/SignOut',{
            method:'GET'
        })
        const res=await response.json();
        if(res.status==="200") {
            router.replace('/auth/signin');
            toast({title:res.message});
            return;
        }
    }
    return (
            <div className="w-[100%] h-[60px] rounded-md flex justify-between px-[20px] items-center" style={{ boxShadow: "0.1px 0.1px 0.1px 1px #dee0e2",userSelect:'none' }}>
                <ul>
                    <li className="font-bold md:text-[25px]">Niyokta</li>
                </ul>
                <ul className="flex w-[70%] md:w-[40%] justify-around text-[12px] md:text-[17px] items-center font-medium">
                    <li onClick={() => router.push('/projects')} className="cursor-pointer">Projects</li>
                    <li onClick={() => router.push('/people')} className="cursor-pointer">People</li>
                    <li onClick={() => router.push('/insights')} className="cursor-pointer">Insights</li>
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="items-center flex" ><CgProfile className="w-[30px] h-[30px]"/></DropdownMenuTrigger>
                            <DropdownMenuContent className="mt-[30px] md:mr-[50px] md:w-[200px] bg-white">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="cursor-pointer" onClick={()=>router.push('/profile')}>Profile</DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer" onClick={()=>router.push('/dashboard')}>Dashboard</DropdownMenuItem>
                                <DropdownMenuItem>Premium Membership</DropdownMenuItem>
                                <DropdownMenuItem>Bid Insights</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel>Accounts</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Withdraw</DropdownMenuItem>
                                <DropdownMenuItem>Transaction History</DropdownMenuItem>
                                <DropdownMenuItem>Your Wallet</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Theme</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuLabel className="cursor-pointer font-medium" onClick={handlesignout}>Sign Out</DropdownMenuLabel>
                                
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </li>
                </ul>

            </div>
    )
}