import React from "react";
import {IoIosArrowDown,IoIosArrowUp} from "../reacticons";
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
import { Button } from "../ui/button";
export default function Experience({user,experience}:{user:number,experience:any[]}) {
    const {toast}=useToast();
    const [part, setpart] = React.useState(false);
    const [newexp,setnewexp]=React.useState({
            title:'',
            company:'',
            from:'',
            to:'',
            description:''
        })

        const handleclick=async ()=>{
            console.log(newexp)
            await fetch('/api/User/AddExperience',{
                method:'POST',
                credentials:'include',
                body: JSON.stringify({
                    user:user,
                    title: newexp.title,
                    company: newexp.company,
                    from: newexp.from,
                    to:newexp.to,
                    description:newexp.description
                }),
            })
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                toast({title:res.message})
            })
        }


    return (
        <div className="w-full min-h-[70px] max-h-[500px] mt-[20px] flex flex-col" style={{ boxShadow: "0.1px 0.1px 0.1px 1px #dee0e2" ,userSelect:'none'}}>
            <div className="w-full h-[70px] flex items-center justify-between px-[20px]">
                <p className="text-[20px] font-bold">Experience</p>
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
           
                <div className="w-full h-[900px] p-[20px]" style={{ display: part ? 'block' : 'none' }}>
                                {
                                    experience.length === 0 ? (
                                        <div className="w-[100%] h-[200px] flex items-center justify-center text-[30px] font-medium">No education Added</div>
                                    ) : (
                                        <div>
                                            {
                                                experience.map((exp,index)=>{
                                                    return(
                                                        <div key={index} className="w-[100%] h-[100px] flex flex-col">
                                                            <p className="text-[13px] font-medium">{exp.title}</p>
                                                            <p className="text-[25px] font-bold">{exp.company}</p>
                                                            <div className="flex text-[10px] font-light"><p>{exp.yearFrom} - </p> <p>{exp.yearTo}</p></div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                                <Dialog>
                                    <DialogTrigger className="w-[100%] mx-auto h-[50px] flex justify-end px-[20px]"><span><Button style={{display:experience.length === 3 ? 'none':'block'}}>Add Experience</Button></span></DialogTrigger>
                                    <DialogContent className="bg-white">
                                        <DialogHeader>
                                            <DialogTitle>Add Experience</DialogTitle>
                                            <DialogDescription className="h-[250px] flex flex-col items-center justify-around">
                                                <Input placeholder="Title or Role" onChange={(e)=>setnewexp((prev)=>({...prev,title:e.target.value}))}/>
                                                <Input placeholder="Organization Name" onChange={(e)=>setnewexp((prev)=>({...prev,company:e.target.value}))}/>
                                                <Input placeholder="Start Year" onChange={(e)=>setnewexp((prev)=>({...prev,from:e.target.value}))}/>
                                                <Input placeholder="End Year" onChange={(e)=>setnewexp((prev)=>({...prev,to:e.target.value}))}/>
                                                <Input placeholder="Description" onChange={(e)=>setnewexp((prev)=>({...prev,description:e.target.value}))}/>
                                            </DialogDescription>
                                        </DialogHeader>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <span><Button type="submit" className="mx-auto w-[100%]" onClick={handleclick}>Add Experience</Button></span>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                
                            </div>
            </div>
    )
}