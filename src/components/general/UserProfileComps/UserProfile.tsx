'use client'
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "../../ui/skeleton";
import { IoCopyOutline } from "../reacticons"
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";
import Socials from "./Socials";
import UserProfileLoader from "./UserProfileLoader";

export default function UserProfile({ username }: { username: string }) {
    const { toast } = useToast()
    const [loading, setloading] = React.useState<true | false>(true)
    const [user, setuser] = React.useState({
        username: "",
        email: "",
        phoneNumber: "",
        DOB: "",
        workingHours: "",
        linkedin: "",
        github: "",
        x: "",
        educations: [{ courseName: "", id: 0, institute: "", userId: 0, yearFrom: "", yearTo: "" }],
        experience: [{ company: "", descriprion: "", id: 0, title: "", userId: 0, yearFrom: "", yearTo: "" }],
        country: "",
        freelancer_rating: ""
    })
    const getUserDetails = async () => {
        const userDetails = await fetch("/api/User/GetUserByUsername", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                username: decodeURIComponent(username)
            })
        })
        const res = await userDetails.json()
        if (res.status === "200") {
            setuser(res.user)
            setloading(false);
        }
        else {
            toast({ title: res.message })
        }
    }
    React.useEffect(() => {
        getUserDetails()
    },[])
    return (
        <div className="w-[50%] h-screen mx-auto p-[30px]" >
            {
                loading ? (
                    <UserProfileLoader/>
                ) : (
                    <div className="font-light text-[15px]">
                        <div className="p-[20px] rounded-md" style={{boxShadow:"1px 1px 5px 1px #eeeeee"}}>
                            <p className="text-[60px] font-bold">{user.username}</p>
                            <span className="flex items-center"><p className="underline underline-offset-4 pr-[10px]">{user.email}</p><IoCopyOutline className="cursor-pointer" onClick={() => {
                                navigator.clipboard.writeText(user.email)
                                    .then(() => toast({ title: "Email copied to clipboard" }))
                                    .catch((err) => toast({ title: err.message }))
                            }} /></span>
                            <PersonalInfo payload={{ phoneNumber: user.phoneNumber, country: user.country, DOB: user.DOB, workingHours: user.workingHours, freelancer_rating: user.freelancer_rating }} />
                        </div>
                        <Socials linkedin={user.linkedin} github={user.github} x={user.x}/>
                        <Experience experiences={user.experience} />
                        <Education educations={user.educations} />
                    </div>
                )
            }
        </div>
    )
}