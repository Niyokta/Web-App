'use client'
import React from "react";
import { useToast } from "@/hooks/use-toast";
export default function profile() {
    const {toast}=useToast()
    const [loading, setloading] = React.useState(true)
    const [user, setuser] = React.useState({
        username: '',
        email: '',
        phone: ''
    })
    const fetchdata = async () => {
        await fetch('/api/User', {
            method: 'GET',
            credentials: 'include'
        })
            .then((res => res.json()))
            .then((res) => {
                if (res.status == "200") {
                    setuser(() => ({ ...user, username: res.user.username, email: res.user.email, phone: res.user.phoneNumber }))
                    setloading(false)
                }
                else toast({title:res.message})
            })
    }
    React.useEffect(() => {
        fetchdata()
    }, [])
    return (
        loading?(
            <div>
                Loading ...
            </div>
        ):(
            <div>
                {user.username}
            </div>
        )
    )
}