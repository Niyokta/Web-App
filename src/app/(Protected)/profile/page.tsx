'use client'
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
export default function profile() {
    const { toast } = useToast()
    const [loading, setloading] = React.useState(true)
    const [user, setuser] = React.useState({
        username: '',
        email: '',
        phone: ''
    })
    const [parts, setparts] = React.useState({
        personalinfo: false,
        education: false,
        experience: false,
        projects:false
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
                <div className="w-full min-h-[70px] max-h-[500px] mt-[20px] flex flex-col" style={{ boxShadow: "0.1px 0.1px 0.1px 1px #dee0e2" }}>
                    <div className="w-full h-[70px] flex items-center justify-between px-[20px]">
                        <p className="text-[20px] font-bold">Personal Information</p>
                        {!parts.personalinfo ? <IoIosArrowDown className="w-[30px] h-[30px] cursor-pointer" onClick={
                            () => {
                                setparts({ ...parts, personalinfo: !parts.personalinfo })
                            }
                        } /> : <IoIosArrowUp className="w-[30px] h-[30px] cursor-pointer" onClick={
                            () => {
                                setparts({ ...parts, personalinfo: !parts.personalinfo })
                            }
                        } />}
                    </div>
                    <div className="w-full h-[430px]" style={{ display: parts.personalinfo ? 'block' : 'none' }}></div>
                </div>
                <div className="w-full min-h-[70px] max-h-[500px] mt-[20px] flex flex-col" style={{ boxShadow: "0.1px 0.1px 0.1px 1px #dee0e2" }}>
                    <div className="w-full h-[70px] flex items-center justify-between px-[20px]">
                        <p className="text-[20px] font-bold">Education</p>
                        {!parts.education ? <IoIosArrowDown className="w-[30px] h-[30px] cursor-pointer" onClick={
                            () => {
                                setparts({ ...parts, education: !parts.education })
                            }
                        } /> : <IoIosArrowUp className="w-[30px] h-[30px] cursor-pointer" onClick={
                            () => {
                                setparts({ ...parts, education: !parts.education })
                            }
                        } />}
                    </div>
                    <div className="w-full h-[430px]" style={{ display: parts.education ? 'block' : 'none' }}></div>
                </div>
                <div className="w-full min-h-[70px] max-h-[500px] mt-[20px] flex flex-col" style={{ boxShadow: "0.1px 0.1px 0.1px 1px #dee0e2" }}>
                <div className="w-full h-[70px] flex items-center justify-between px-[20px]">
                    <p className="text-[20px] font-bold">Experience</p>
                   { !parts.experience?<IoIosArrowDown className="w-[30px] h-[30px] cursor-pointer" onClick={
                        ()=>{
                            setparts({...parts,experience:!parts.experience})
                        }
                    }/>:<IoIosArrowUp className="w-[30px] h-[30px] cursor-pointer" onClick={
                        ()=>{
                            setparts({...parts,experience:!parts.experience})
                        }
                    }/>}
                </div>
                <div className="w-full h-[430px]" style={{display:parts.experience?'block':'none'}}></div>
            </div>
            <div className="w-full min-h-[70px] max-h-[500px] mt-[20px] flex flex-col" style={{ boxShadow: "0.1px 0.1px 0.1px 1px #dee0e2" }}>
                <div className="w-full h-[70px] flex items-center justify-between px-[20px]">
                    <p className="text-[20px] font-bold">Your Projects</p>
                   { !parts.projects?<IoIosArrowDown className="w-[30px] h-[30px] cursor-pointer" onClick={
                        ()=>{
                            setparts({...parts,projects:!parts.projects})
                        }
                    }/>:<IoIosArrowUp className="w-[30px] h-[30px] cursor-pointer" onClick={
                        ()=>{
                            setparts({...parts,projects:!parts.projects})
                        }
                    }/>}
                </div>
                <div className="w-full h-[430px]" style={{display:parts.projects?'block':'none'}}></div>
            </div>
            </>
        )
    )
}