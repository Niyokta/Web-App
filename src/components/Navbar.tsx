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
import { Button } from "./ui/button";

export default function Navbar() {
    const router = useRouter();
    return (
            <div className="w-[100%] h-[60px] rounded-md flex justify-between px-[20px] items-center" style={{ boxShadow: "0.1px 0.1px 0.1px 1px #dee0e2" }}>
                <ul>
                    <li className="font-bold md:text-[25px]">Niyokta</li>
                </ul>
                <ul className="flex w-[70%] md:w-[40%] justify-around text-[12px] md:text-[17px] items-center font-medium">
                    <li onClick={() => router.push('/projects')} className="cursor-pointer">Projects</li>
                    <li onClick={() => router.push('/people')} className="cursor-pointer">People</li>
                    <li onClick={() => router.push('/insights')} className="cursor-pointer">Insights</li>
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger><CgProfile className="w-[20px] h-[20px]" /></DropdownMenuTrigger>
                            <DropdownMenuContent className="mt-[30px] md:mr-[50px] md:w-[200px] bg-white">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
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
                                
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </li>
                </ul>

            </div>
    )
}