import React, { useState } from "react";
import AboutMe from "../Components/AboutMe";
import ProjectHomeCard from "../Components/ProjectHomeCard";
import SkillList from "../Components/SkillList";
import pfp from "../images/pfp.png"

const PortfolioContainer = () => {

    const [tom, setTom] = useState({
        name: 'Thomas Grant',
        pfp: pfp,
        email: 'grntthomasronnie@gmail.com',
        linkedin: 'https://www.linkedin.com/in/thomas-grant-1063b126a/',
        github: 'https://github.com/TomRgrant',
        skills: [
            {name: 'JavaScript', logo: 'https://miro.medium.com/v2/resize:fit:1024/1*S-nV902O1yWwpFbxn0P_xA.png', alt: 'javascript logo'},
            {name: 'React', logo: 'https://nextsoftware.io/files/images/logos/main/reactjs-logo.png', alt: 'react logo'},
            {name: 'Python3', logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png', alt: 'python logo'},
            {name: 'SQL', logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png', alt: 'sql logo'},
            {name: 'HTML5', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png', alt: 'html logo'},
            {name: 'CSS3', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png', alt: 'css logo'},
            {name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', alt: 'git logo'},
            {name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png', alt: 'github logo'},
            {name: 'Flask', logo: 'https://d4.alternativeto.net/jmtD1yk6SqztgpCSDhUSho4OBc5dw1d9eIdiZktqzOY/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9mbGFza18yNzAwNC5wbmc.png', alt: 'flask logo'},
            {name: 'MongoDB', logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld', alt: 'mongo db logo'}
        ],
        projects: [{
            name: "Who's That Pokémon!?",
            skills: ["JavaScript", "React", "HTML5", "CSS3", "github"],
            description: `Whos that Pokémon is a SPA app that uses the pokemon api to 
            create a game where the user is show a image of a pokemon, they then have
            to guess it's name.`,
            thumbnail: "https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg",
            screenshots: [],
            videoDemo: "youtube link........",
        },
        {
            name: "Gym Admin app",
            skills: ["Python3", "flask", "HTML5", "CSS3"],
            description: 'gym app',
            thumbnail: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
            screenshots: [],
            videoDemo: "",
        },
        {
            name: "Gym Admin app",
            skills: ["Python3", "flask", "HTML5", "CSS3"],
            description: 'gym app',
            thumbnail: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
            screenshots: [],
            videoDemo: "",
        },
        {
            name: "Gym Admin app",
            skills: ["Python3", "flask", "HTML5", "CSS3"],
            description: 'gym app',
            thumbnail: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
            screenshots: [],
            videoDemo: "",
        },
        {
            name: "Gym Admin app",
            skills: ["Python3", "flask", "HTML5", "CSS3"],
            description: 'gym app',
            thumbnail: "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
            screenshots: [],
            videoDemo: "",
        }
    ]
    }
    );



return(
    <>
    <div className="wrapper">

            <div className="z1">
            <section className="about-me">
                <div className="about-me-box">
                    <AboutMe tom={tom} />
                </div>

                <div className="pfp" >
                    <img className="pfp-img" src={tom.pfp} />
                </div>
            </section>

            <section className="skill-display">
                <h2 className="home-view-skills">Skills</h2>
                <SkillList className="skill-list" skills={tom.skills} />
            </section>

            <section className="home-project-display">
                <h2 className="home-view-projects-title">View My Projects</h2>
                <div className="home-project-display-elements">
                    <ProjectHomeCard projects={tom.projects} skills={tom.skills} />
                </div>
            </section>
            </div>
    </div>
    </>
);


};

export default PortfolioContainer;
