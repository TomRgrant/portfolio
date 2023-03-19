import React from "react";

const ProjectSkillLogo = (skill) => {


return(
    <img className="home-project-skill" src={skill.skill.logo} alt={skill.skill.alt} />
);

};

export default ProjectSkillLogo;