'use client'
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { PersonalInfo, Education, Experience, Projects } from "@/components";
export default function profile() {
    const { toast } = useToast()
    const [loading, setloading] = React.useState(true)
    const [user, setuser] = React.useState({
        userid:0,
        username: '',
        email: '',
        phone: '',
        educations: [],
        experiences: []
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
                    setuser(() => ({ ...user,userid:res.user.id, username: res.user.username, email: res.user.email, phone: res.user.phoneNumber,educations:res.user.educations,experiences:res.user.experiences }))
                    setloading(false)
                }
                else toast({ title: res.message })
            })
    }
    React.useEffect(() => {
        fetchdata()
    }, [])
    return (
        loading ? (
            <div>
                Loading ...
            </div>
        ) : (
            <>
                <PersonalInfo userprop={user}/>
                <Education user={user.userid} education={user.educations}/>
                <Experience user={user.userid} experience={user.experiences}/>
                <Projects/>
            </>
        )
    )
}