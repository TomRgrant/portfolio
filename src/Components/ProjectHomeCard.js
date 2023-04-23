import React, { useRef } from "react";
import SkillHomeLogo from "./SkillHomeLogo";

const ProjectHomeCard = ({ projects, skills }) => {


    const projectNodes = projects.map((project, index) => {
        return (
        <SkillHomeLogo key={index} selectedProject={project} skills={skills} />)
    })




return(
    <>
        {projectNodes}
    </>
);

};

export default ProjectHomeCard;