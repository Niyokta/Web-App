'use client'
import React, { KeyboardEventHandler } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TbLoader3 } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast"
import Link from "next/link";

type creds = {
    username: string,
    email: string,
    phone:number,
    password: string,
    cnfpassword: string
}

export default function SignupBox() {
    const { toast } = useToast();
    const router = useRouter()
    const [loading, setloading] = React.useState(false);
    const [usercreds, setusercreds] = React.useState({
        username: "",
        email: "",
        password: "",
        cnfpassword: ""
    })

    const handlesignup = async () => {
        setloading(true)
        if (usercreds.username == "" || usercreds.email == "" || usercreds.password == "" || usercreds.cnfpassword == "") {
            setloading(false)
            return toast({ title: "Please fill all details" })
        }
        if (usercreds.password !== usercreds.cnfpassword) {
            setloading(false)
            return toast({ title: "Password & Confirm Password should match" })
        }

        


        await fetch('/api/Auth/Signup', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                Username: usercreds.username,
                Password: usercreds.password,
                Email: usercreds.email
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("signup res - > ",res)
                if (res.status === "200") router.replace('/auth/signin');
                else setloading(false)
            })
            .catch((err) => setloading(false))
    }
    const handlekeydown=(event:any)=>{
        if(event.key==='Enter') handlesignup();
    }
    return (
        loading ? (
            <div className="w-full h-screen flex items-center justify-center">
                <Card className="w-[80%] md:w-[400px] h-[350px] flex items-center justify-center">
                    <TbLoader3 className="w-[50px] h-[50px] animate-spin" />
                </Card>
            </div>
        ) : (
            <div className="w-full h-screen flex items-center justify-center">
                <Card className="w-[80%] md:w-[400px] h-[520px]">
                    <CardHeader>
                        <CardTitle>Create Account</CardTitle>
                        <CardDescription>Enter credentials to create a new account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Username</p>
                        <Input onKeyDown={handlekeydown} onChange={(e) => setusercreds((prev) => ({ ...prev, username: e.target.value }))} />
                    </CardContent>
                    <CardContent>
                        <p>Email ID</p>
                        <Input onKeyDown={handlekeydown} onChange={(e) => setusercreds((prev) => ({ ...prev, email: e.target.value }))} />
                    </CardContent>
                    <CardContent>
                        <p>Password</p>
                        <Input type='password' onKeyDown={handlekeydown} onChange={(e) => setusercreds((prev) => ({ ...prev, password: e.target.value }))} />
                    </CardContent>
                    <CardContent>
                        <p>Confirm Password</p>
                        <Input type='password' onKeyDown={handlekeydown} onChange={(e) => setusercreds((prev) => ({ ...prev, cnfpassword: e.target.value }))} />
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button variant="default" className="mx-auto" onClick={handlesignup}>Create Account</Button>
                        <p className='text-center mt-[10px] text-[12px] underline'> Already, have an account? <Link href='/auth/signin'>Login</Link></p>
                    </CardFooter>

                </Card>
            </div>
        )
    )
}