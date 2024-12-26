import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoIosArrowUp } from "react-icons/io";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"
import { ImCross } from "react-icons/im";
import { useToast } from "@/hooks/use-toast";
import { MdDelete } from "react-icons/md";
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

export default function Projects({ user, username, projects }: { user: number, username: string, projects: any[] }) {
    const { toast } = useToast();
    const [newproject, setnewproject] = React.useState({
        title: '',
        maxbudget: '',
        description: '',
        minbudget: '',
    })
    const [skill, setskill] = React.useState<string>('');
    const [skills, setskills] = React.useState<string[]>([]);
    const [category, setcategory] = React.useState<string>('');
    const [categories, setcategories] = React.useState<string[]>([]);
    const [part, setpart] = React.useState(false);

    const createnewproject = async () => {
        fetch('/api/User/AddProject', {
            method: 'POST',
            body: JSON.stringify({
                user: user,
                title: newproject.title,
                description: newproject.description,
                maxprice: newproject.maxbudget,
                skills: skills,
                categories: categories,
                minprice: newproject.minbudget,
                client_name: username
            })
        })
            .then((res) => res.json())
            .then((res) => {
                toast({ title: res.message, description: "Please Refresh the Page" })
            })
    }
    const handledelete=async(id:number)=>{
        await fetch('/api/User/RemoveProject',{
            method:'POST',
            body:JSON.stringify({
                projectID:id
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            toast({title:res.message,description:"Please refresh the page"});
        })
    }
    console.log(projects)
    return (
        <div className="w-full min-h-[70px] mt-[20px] flex flex-col" style={{ boxShadow: "0.1px 0.1px 0.1px 1px #dee0e2" }}>
            <div className="w-full h-[70px] flex items-center justify-between px-[20px]">
                <p className="text-[20px] font-bold">Your Projects</p>
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
            <div className="w-full  p-[20px]" style={{ display: part ? 'block' : 'none' }}>
                {
                    projects.length === 0 ? (
                        <div className="w-full h-[100px] flex items-center justify-center text-[30px] font-bold">
                            <p>No Projects to Show</p>
                        </div>
                    ) : (
                        projects.map((project, index) => {
                            return (
                                <div className="w-[100%] h-[100px] hover:bg-[#f7f7f7] flex items-center p-[20px]" key={index}>
                                    <div className="w-[90%]">
                                        <p className="text-[20px] font-medium">{project.title.length > 100?project.title.slice(0,100)+" .....":project.title}</p>
                                        <p className="text-[15px] font-medium">{project.created_at.slice(0,10)} | Rs. {project.min_budget} - Rs. {project.max_budget}</p>
                                    </div>
                                    <Dialog>
                                        <DialogTrigger className=""><MdDelete className="w-[20px] h-[20px] hover:animate-ping" style={{ color: '838383' }} /></DialogTrigger>
                                        <DialogContent className="bg-white w-[500px]">
                                            <DialogHeader>
                                                <DialogTitle>Remove Project</DialogTitle>
                                                <DialogDescription className="h-[150px] flex flex-col ">
                                                    <span className="w-[90%] flex flex-col mt-[30px]" style={{}}>
                                                        <span className="text-[13px] font-medium">{project.title.length > 100 ? project.title.slice(0,100)+" .....":project.title}</span>
                                                        <span className="text-[25px] font-bold">{project.skills}</span>
                                                        <span className=" text-[10px] font-light">{project.created_at.slice(0,10)} | Rs. {project.min_budget} - Rs. {project.max_budget}</span>
                                                    </span>
                                                    <span className="font-medium text-[20px] text-left mt-[20px]">Do you really want to delete this record ?</span>
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button type="submit" className="mx-auto w-[100%]" onClick={()=>handledelete(project.project_id)}>Delete Record</Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            )
                        })
                    )
                }
                <Dialog>
                    <DialogTrigger className="w-[100%] mx-auto h-[40px] flex justify-end px-[20px] mt-[20px]"><div className="w-[150px] h-[100%] shadow-sm shadow-[#b2b2b2] justify-center"><p className="mx-auto pt-[8px] font-medium">Add New Project</p></div></DialogTrigger>
                    <DialogContent className="bg-white w-[450px] md:w-[900px]">
                        <DialogHeader>
                            <DialogTitle>Host a New Project</DialogTitle>
                            <DialogDescription className="h-[700px] flex flex-col">
                                <Label htmlFor="email" className="mt-[20px] mb-[10px]">Title</Label>
                                <Input onChange={(e) => setnewproject((prev) => ({ ...prev, title: e.target.value }))} />
                                <Label htmlFor="email" className="mt-[20px] mb-[10px]">Minimum Bid Price</Label>
                                <Input type="number" onChange={(e) => setnewproject((prev) => ({ ...prev, minbudget: e.target.value }))} />
                                <Label htmlFor="email" className="mt-[20px] mb-[10px]">Maximum Bid Price</Label>
                                <Input type="number" onChange={(e) => setnewproject((prev) => ({ ...prev, maxbudget: e.target.value }))} />
                                <Label htmlFor="email" className="mt-[20px] mb-[10px]">Add Skills</Label>
                                <Input value={skill} onChange={(e) => setskill(e.target.value)} onKeyDown={(e) => {

                                    if (e.key === 'Enter') {
                                        if (skills.length >= 10) {
                                            toast({ title: "Maximum Limit Reached", description: "Remove any skill to add new" });
                                            return;
                                        }
                                        if (skill.length > 20) {
                                            toast({ title: "Skill can be of max 30 letters", description: "Remove any category to add new" });
                                            return;
                                        }
                                        setskills((prev) => ([...prev, skill]));
                                        setskill("")
                                    }
                                }} />
                                <span className="w-[100%] mt-[20px] max-h-[100px] flex">{
                                    skills.map((skill, index) => {
                                        return (
                                            <span key={index} className="bg-[#e8e8e8] p-[10px] mr-[10px] rounded-md font-medium flex items-center"><span className="pr-[10px]">{skill}</span><ImCross className="w-[10px] h-[10px] cursor-pointer font-bold" onClick={() => setskills((skills) => skills.filter((s) => s !== skill))} /></span>
                                        )
                                    })
                                }</span>
                                <Label htmlFor="email" className="mt-[20px] mb-[10px]">Add Categorie</Label>
                                <Input value={category} onChange={(e) => setcategory(e.target.value)} onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        if (categories.length >= 5) {
                                            toast({ title: "Maximum Limit Reached", description: "Remove any category to add new" });
                                            return;
                                        }
                                        if (category.length > 30) {
                                            toast({ title: "Category can be of max 30 letters", description: "Remove any category to add new" });
                                            return;
                                        }
                                        setcategories((prev) => ([...prev, category]));
                                        setcategory("")
                                    }
                                }} />
                                <span className="w-[100%] mt-[20px] max-h-[100px] flex">{
                                    categories.map((catg, index) => {
                                        return (
                                            <span key={index} className="bg-[#e8e8e8] p-[10px] mr-[10px] rounded-md font-medium flex items-center"><span className="pr-[10px]">{catg}</span><ImCross className="w-[10px] h-[10px] cursor-pointer font-bold" onClick={() => setcategories((categories) => categories.filter((s) => s !== catg))} /></span>
                                        )
                                    })
                                }</span>
                                <Label htmlFor="email" className="mt-[20px] mb-[10px]">Description</Label>
                                <Textarea className="w-[100%] h-[200px]" onChange={(e) => setnewproject((prev) => ({ ...prev, description: e.target.value }))} />
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="submit" className="mx-auto w-[100%]" onClick={createnewproject}>Host Project</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}