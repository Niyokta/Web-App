import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "../reacticons"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"

export default function Education({ user,education }: { user:number,education: any[] }) {
    const {toast}=useToast();
    const [part, setpart] = React.useState(false);
    const [newedu,setnewedu]=React.useState({
        cname:'',
        institute:'',
        startyear:'',
        endyear:''
    })
    const handleclick=async ()=>{
        console.log(newedu)
        await fetch('/api/User/AddEducation',{
            method:'POST',
            credentials:'include',
            body: JSON.stringify({
                user:user,
                coursename: newedu.cname,
                yearfrom: newedu.startyear,
                yearto: newedu.endyear,
                institute:newedu.institute
            }),
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            toast({title:res.message})
        })
    }
    return (
        <div className="w-full min-h-[70px] max-h-[500px] mt-[20px] flex flex-col" style={{ boxShadow: "0.1px 0.1px 0.1px 1px #dee0e2", userSelect: 'none' }}>
            <div className="w-full h-[70px] flex items-center justify-between px-[20px]">
                <p className="text-[20px] font-bold">Education</p>
                {!part ? <IoIosArrowDown className="w-[30px] h-[30px] cursor-pointer" onClick={
                    () => {
                        setpart(!part)
                    }
                } /> : <IoIosArrowUp className="w-[30px] h-[30px] cursor-pointer" onClick={
                    () => {
                        setpart(!part)
                    }
                } />}
            </div>
            <div className="w-full max-h-[430px] p-[20px]" style={{ display: part ? 'block' : 'none' }}>
                {
                    education.length === 0 ? (
                        <div className="w-[100%] h-[200px] flex items-center justify-center text-[30px] font-medium">No education Added</div>
                    ) : (
                        <div>
                            {
                                education.map((edu,index)=>{
                                    return(
                                        <div key={index} className="w-[100%] h-[100px] flex flex-col">
                                            <p className="text-[13px] font-medium">{edu.courseName}</p>
                                            <p className="text-[25px] font-bold">{edu.institute}</p>
                                            <div className="flex text-[10px] font-light"><p>{edu.yearFrom} - </p> <p>{edu.yearTo}</p></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
                <Dialog>
                    <DialogTrigger className="w-[100%] mx-auto h-[50px] flex justify-end px-[20px]"><span><Button style={{display:education.length===3?'none':'block'}}>Add Education</Button></span></DialogTrigger>
                    <DialogContent className="bg-white">
                        <DialogHeader>
                            <DialogTitle>Add Education</DialogTitle>
                            <DialogDescription className="h-[250px] flex flex-col items-center justify-around">
                                <Input placeholder="Course Name" onChange={(e)=>setnewedu((prev)=>({...prev,cname:e.target.value}))}/>
                                <Input placeholder="Institute Name" onChange={(e)=>setnewedu((prev)=>({...prev,institute:e.target.value}))}/>
                                <Input placeholder="Start Year" onChange={(e)=>setnewedu((prev)=>({...prev,startyear:e.target.value}))}/>
                                <Input placeholder="End Year" onChange={(e)=>setnewedu((prev)=>({...prev,endyear:e.target.value}))}/>
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <span><Button type="submit" className="mx-auto w-[100%]" onClick={handleclick}>Add Education</Button></span>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

            </div>
        </div>
    )
}