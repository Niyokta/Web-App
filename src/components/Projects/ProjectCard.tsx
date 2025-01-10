import { FC } from "react";
import { FaInfoCircle } from "react-icons/fa";

interface Project {
  title: string;
  client_name: string;
  client_country: string;
  min_budget: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, client_name, client_country, min_budget } = project;

  return (
    <div
      style={{
        padding: "20px",
        width: "520px",
      }}
      className="hover:bg-[#f7f7f7] rounded-md shadow-md shadow-[#eeeeee]"
    >
      <h2
        style={{
          maxHeight: "100px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </h2>
      <p>
        <strong>{client_name}</strong> ({client_country})
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Minimum Bid: {min_budget}</span>
        <FaInfoCircle size={20} color="gray" />
      </div>
    </div>
  );
};

export default ProjectCard;
