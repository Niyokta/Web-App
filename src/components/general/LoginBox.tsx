'use client'
import React, { useRef } from "react";
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
import { TbLoader3 } from "../general/reacticons";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast"
import Link from "next/link";

type creds = {
    username: string,
    password: string
}
export default function LoginBox() {
    const passwordRef=useRef<HTMLInputElement | null>(null);
    const { toast } = useToast();
    const router = useRouter();
    const [usercreds, setusercreds] = React.useState<creds>({
        username: "",
        password: ""
    })
    const [loading, setloading] = React.useState(false);
    const handlesignin = async () => {
        setloading(true);
        await fetch('/api/Auth/Signin', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Username': usercreds.username,
                'Password': usercreds.password
            }
        }).then((res) => res.json())
            .then((res) => {
                if (res.status == "200") return router.replace('/dashboard')
                else {
                    setloading(false);
                    toast({
                        title:res.message
                    })
                }
            })
            .catch((err) =>{
                setloading(false)
                toast({title:err.message})
            })
    }
    const handlekeydown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter') handlesignin();
    }
    const handleusernamekeydown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==="Enter") passwordRef.current?.focus();
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
                <Card className="w-[80%] md:w-[400px] h-[350px]">
                    <CardHeader>
                        <CardTitle>Signin</CardTitle>
                        <CardDescription>Enter credentials to signin</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Username</p>
                        <Input  onKeyDown={handleusernamekeydown} onChange={(e) => setusercreds((prev) => ({ ...prev, username: e.target.value }))} />
                    </CardContent>
                    <CardContent>
                        <p>Password</p>
                        <Input onKeyDown={handlekeydown} type='password' ref={passwordRef} onChange={(e) => setusercreds((prev) => ({ ...prev, password: e.target.value }))} />
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button variant="default"  className="mx-auto" onClick={handlesignin}>SignIn</Button>
                        <p className='text-center text-[12px] mt-[10px] underline'> Do not have an account? <Link href='/auth/signup' onClick={()=>setloading(true)}>Register</Link></p>
                    </CardFooter>
                </Card>
            </div>
        )
    )
}