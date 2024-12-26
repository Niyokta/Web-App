'use client'
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { PersonalInfo, Education, Experience, Projects } from "@/components";
import { Skeleton } from "@/components/ui/skeleton"
import { useRouter } from "next/navigation";
export default function profile() {
    const router=useRouter()
    const { toast } = useToast()
    const [loading, setloading] = React.useState(true)
    const [user, setuser] = React.useState({
        userid:0,
        username: '',
        email: '',
        phone: '',
        educations: [],
        experiences: [],
        projects:[],
    })
    const fetchdata = async () => {
        await fetch('/api/User', {
            method: 'GET',
            credentials: 'include'
        })
            .then((res => res.json()))
            .then((res) => {
                console.log("get user res- >> ",res)
                if (res.status == "200") {
                    setuser(() => ({ ...user,userid:res.user.id, username: res.user.username, email: res.user.email, phone: res.user.phoneNumber,educations:res.user.educations,experiences:res.user.experiences,projects:res.user.projects }))
                    setloading(false)
                }
                else toast({ title: res.message })
            })
    }
    const handlerefresh=()=>{
        router.refresh()
    }
    React.useEffect(() => {
        fetchdata()
    }, [])
    return (
        loading ? (
            <>
               <Skeleton className="w-full h-[70px] mt-[20px]" />
               <Skeleton className="w-full h-[70px] mt-[20px]" />
               <Skeleton className="w-full h-[70px] mt-[20px]" />
               <Skeleton className="w-full h-[70px] mt-[20px]" />
            </>
        ) : (
            <>
                <PersonalInfo userprop={user}/>
                <Projects username={user.username} user={user.userid} projects={user.projects}/>
                <Education user={user.userid} education={user.educations}/>
                <Experience user={user.userid} experience={user.experiences} fnc={handlerefresh}/>
            </>
        )
    )
}