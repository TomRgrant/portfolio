import React from "react";
import ProjectSkillLogo from "./ProjectSkillLogo";

const SkillHomeLogo = ({selectedProject, skills}) => {


    // Find the skill objects that are used in the selected project
    // loops over the selected projects skills
    const projectSkills = selectedProject.skills.map((selectedSkills, index) => {
        // checks each skill in tom var to see if its name matches one of the selected project skill name
        return skills.find((skill) => {
            // converts each value to lower incase of missed caps or mistakes
            if (skill.name.toLowerCase() === selectedSkills.toLowerCase())
            return skill;
        }
        )
    });

    const skillLogoNodes = projectSkills.map((skill, index) => {
        return <ProjectSkillLogo key={index} skill={skill} />
    });



return(
    <>
    <div className="home-project-container">
        <div className="home-project-thumbnail-box">
            <img className="home-project-thumbnail" src={selectedProject.thumbnail} alt="Thumbnail of project" />
        </div>

        <div className="home-project-info">
            <h2 className="project-name">{selectedProject.name}</h2>
            <div className="home-project-skills">
                {skillLogoNodes}
            </div>
            <p className="project-description">{selectedProject.description}</p>
        </div>
    </div>
    </>
);

};

export default SkillHomeLogo;