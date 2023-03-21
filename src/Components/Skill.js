import React from "react";

const Skill = ({skill}) => {



return(
    <>
    <div className="skill-display-logo">
        <img className="skill-logo" src={skill.logo} alt={skill.alt} />
        <h1>{skill.name}</h1>
    </div>
    </>
);

};

export default Skill;