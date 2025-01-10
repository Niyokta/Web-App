import React from "react";
const ProjectCard = ({ filter, title, client_name,category, client_country, min_budget, skills }: { filter: string[],category:string[], title: string, client_country: string, client_name: string, min_budget: string, skills: string[] }) => {
  let display = "none";
  if (filter.length === 0) {
    display = "block"
  }
  else {
    filter.map((filter) => {
      if (category.includes(filter)) {
        display = "block";
        return;
      }
    })
  }
  return (
    <div className="p-[20px] font-light text-[15px] hover:bg-[#f7f7f7] rounded-md" style={{ boxShadow: "1px 1px 5px 1px #eeeeee",display:display }}>
      <p className="text-[12px]">{`${client_name} ( ${client_country} )`}</p>
      <p className="pt-[5px] font-medium">{title.length > 80 ? title.slice(0, 80) + "......" : title}</p>
      <p className="text-[12px] pb-[20px] underline-offset-2 underline">{`Min-Bid Price : ₹ ${min_budget}`}</p>
      <span className="flex">
        {
          skills.length > 0 ? skills.map((skill, index) => {
            if (index > 6 || skill === "") return;
            return (
              <p className="text-[10px] px-[3px] py-[1px] font-medium rounded-sm mr-[5px] border-[1px] border-[#c4c4c4] hover:bg-black hover:text-white cursor-default" key={index} style={{ boxShadow: "1px 1px 5px 1px #eeeeee" }}>{skill}</p>
            )
          }) : (
            <p></p>
          )
        }
      </span>
      <p className="text-blue-600 text-[11px] pt-[20px] cursor-pointer font-medium">Read More</p>
    </div>
  );
};

export default ProjectCard;
