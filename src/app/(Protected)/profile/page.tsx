'use client'
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { PersonalInfo, Education, Experience, Projects } from "@/components";
export default function profile() {
    const { toast } = useToast()
    const [loading, setloading] = React.useState(true)
    const [user, setuser] = React.useState({
        username: '',
        email: '',
        phone: '',
        education: [],
        experience: []
    })
    const fetchdata = async () => {
        await fetch('/api/User', {
            method: 'GET',
            credentials: 'include'
        })
            .then((res => res.json()))
            .then((res) => {
                if (res.status == "200") {
                    console.log(res.user)
                    setuser(() => ({ ...user, username: res.user.username, email: res.user.email, phone: res.user.phoneNumber }))
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
                <PersonalInfo />
                <Education />
                <Experience />
                <Projects />
            </>
        )
    )
}