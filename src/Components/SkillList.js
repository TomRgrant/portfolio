import React from "react";
import Skill from "./Skill";

const SkillList = ({skills}) => {

const skillNodes = skills.map((skill, index) => {
    return <Skill key={index} skill={skill}/>
})


return(
    <>
    <div className="skill-list">
        {skillNodes}
    </div>
    </>
);

};

export default SkillList;