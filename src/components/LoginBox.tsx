'use client'
import React from "react";
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
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

type creds = {
    username: String,
    password: String
}
export default function LoginBox() {
    const { toast } = useToast()
    const router = useRouter();
    const [usercreds, setusercreds] = React.useState<creds>({
        username: "",
        password: ""
    })
    const [loading, setloading] = React.useState(false);
    const handlesignin = async () => {
        setloading(true);
        const a = await fetch('http://3.6.34.255:3000/api/v1/auth/signin', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                username:usercreds.username,
                password:usercreds.password
            })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status == "200") {
                    console.log(res)
                    router.replace('/Dashboard')
                }
                else {
                    setloading(false);
                    toast({
                        title: res.message,
                      })
                }
            })
            .catch((err) =>{
                setloading(false);
                    toast({
                        title: err.message,
                      })
            })
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
                        <Input onChange={(e) => setusercreds((prev) => ({ ...prev, username: e.target.value }))} />
                    </CardContent>
                    <CardContent>
                        <p>Password</p>
                        <Input onChange={(e) => setusercreds((prev) => ({ ...prev, password: e.target.value }))} />
                    </CardContent>
                    <CardFooter>
                        <Button variant="default" className="mx-auto" onClick={handlesignin}>SignIn</Button>
                    </CardFooter>
                </Card>
            </div>
        )
    )
}