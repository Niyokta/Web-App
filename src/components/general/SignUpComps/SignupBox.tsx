'use client'
import React from "react";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TbLoader3, CgChevronDoubleRight, CgChevronDoubleLeft, FaLinkedinIn, FaGithub, FaXTwitter } from "@/components/general/reacticons";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast"
import Link from "next/link";
import validate from "./SignUpValidation";

export default function SignupBox() {
    const { toast } = useToast();
    const router = useRouter()
    const [loading, setloading] = React.useState(false);
    const [usercreds, setusercreds] = React.useState({
        username: "",
        email: "",
        password: "",
        cnfpassword: "",
        country: "",
        working_hour: "",
        birth_date: "",
        phoneNumber:0
    })
    const [socials, setsocials] = React.useState({
        linkedin: "",
        github: "",
        x: "",
    })
    const [curr, setcurr] = React.useState(0);

    const handlesignup = async () => {
        const validity=validate(usercreds,socials);
        if(validity!="Ok"){
            toast({title:validity});
            return;
        }
        setloading(true)
        await fetch('/api/Auth/Signup', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                Username: usercreds.username,
                Password: usercreds.password,
                Email: usercreds.email,
                phone:usercreds.phoneNumber,
                country:usercreds.country,
                working_hours:usercreds.working_hour,
                birth_date:usercreds.birth_date,
                linkedin:socials.linkedin,
                github:socials.github,
                x:socials.x
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("signup res - > ", res)
                if (res.status === "200") router.replace('/auth/signin');
                else {toast({title:res.message});setloading(false);}
            })
            .catch((err) => setloading(false))
    }
    const handlekeydown = (event: any) => {
        if (event.key === 'Enter') handlesignup();
    }
    return (
        loading ? (
            <div className="w-full h-screen flex items-center justify-center">
                <Card className="w-[80%] md:w-[600px] h-[600px] flex items-center justify-center">
                    <TbLoader3 className="w-[50px] h-[50px] animate-spin" />
                </Card>
            </div>
        ) : curr === 0 ? (
            <div className="w-full h-screen flex items-center justify-center">
                <Card className="w-[80%] md:w-[600px] h-[600px]">
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
                        <p>Phone Number</p>
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
                        {/* <Button variant="default" className="mx-auto" onClick={handlesignup}>Create Account</Button> */}
                        <div className=" w-full px-[20px] flex mt-[10px] justify-between"><CgChevronDoubleLeft className="w-[40px] h-[40px] opacity-20 cursor-pointer" /><CgChevronDoubleRight className="w-[40px] h-[40px] cursor-pointer" onClick={() => setcurr(1)} /></div>
                        <p className='text-center mt-[0px] text-[12px] underline'> Already, have an account? <Link href='/auth/signin' onClick={()=>setloading(true)}>Login</Link></p>
                    </CardFooter>

                </Card>
            </div>
        ) : (
            <div>
                <div className="w-full h-screen flex items-center justify-center">
                    <Card className="w-[80%] md:w-[600px] h-[650px]">
                        <CardHeader>
                            <CardTitle>Create Account</CardTitle>
                            <CardDescription>Enter credentials to create a new account</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>D.O.B {`( DD-MM-YYYY )`}</p>
                            <Input onKeyDown={handlekeydown} onChange={(e) => setusercreds((prev) => ({ ...prev, birth_date: e.target.value }))} />
                        </CardContent>
                        <CardContent>
                            <p>Working Hours</p>
                            <Input type='password' onKeyDown={handlekeydown} onChange={(e) => setusercreds((prev) => ({ ...prev, working_hour: e.target.value }))} />
                        </CardContent>
                        <CardContent>
                            <p>Country / Nationality</p>
                            <Input type='password' onKeyDown={handlekeydown} onChange={(e) => setusercreds((prev) => ({ ...prev, country: e.target.value }))} />
                        </CardContent>
                        <CardContent>
                            <p>Social Links</p>
                            <div className="flex items-center justify-between pt-[20px]">
                                <FaLinkedinIn className="w-[30px] h-[30px]" /><Input className="w-[90%]"  placeholder="LinkedIn" onKeyDown={handlekeydown} onChange={(e) => setsocials((prev) => ({ ...prev, linkedin: e.target.value }))} />
                            </div>
                            <div className="flex items-center justify-between pt-[20px]">
                                <FaGithub className="w-[30px] h-[30px]" /><Input className="w-[90%]"  placeholder="GitHub" onKeyDown={handlekeydown} onChange={(e) => setsocials((prev) => ({ ...prev, github: e.target.value }))} />
                            </div>
                            <div className="flex items-center justify-between pt-[20px]">
                                <FaXTwitter className="w-[30px] h-[30px]" /><Input className="w-[90%]" placeholder="Twitter / X" onKeyDown={handlekeydown} onChange={(e) => setsocials((prev) => ({ ...prev, x: e.target.value }))} />
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            <div className=" w-full px-[20px] flex mt-[10px] justify-between">
                                <CgChevronDoubleLeft className="w-[40px] h-[40px] cursor-pointer" onClick={() => setcurr(0)} />
                                <Button variant="default" className="mx-auto" onClick={handlesignup}>Create Account</Button>
                                <CgChevronDoubleRight className="w-[40px] h-[40px] opacity-20 cursor-pointer" />
                            </div>
                            <p className='text-center mt-[10px] text-[12px] underline'> Already, have an account? <Link href='/auth/signin' onClick={()=>setloading(true)}>Login</Link></p>
                        </CardFooter>

                    </Card>
                </div>
            </div>
        )
    )
}