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
    username: string,
    password: string
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
        await fetch('/api/Auth/Signin', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Username': usercreds.username,
                'Password': usercreds.password
            }
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
                if (res.status == "200") return router.replace('/Dashboard')
                else {
                    setloading(false);
                    toast({
                        title:res.message
                    })
                }
            })
            .catch((err) => setloading(false))
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