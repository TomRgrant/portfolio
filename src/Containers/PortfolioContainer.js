import React, { useRef, useState } from "react";
import AboutMe from "../Components/AboutMe";
import ProjectHomeCard from "../Components/ProjectHomeCard";
import SkillList from "../Components/SkillList";

import pfp from "../images/pfp.png"
import pokemonthumb from "../images/pokemon-thumbnail.png"
import gymAdmin from "../images/gym_admin.png"
import hackerNews from "../images/hacker_news.png"
import mindBlank from "../images/mind_blank.png"
import Thomas_Grant_CV from "../images/Thomas_Grant_CV.pdf"


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
            {name: 'CSS3', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png', alt: 'css logo'},
            {name: 'HTML5', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png', alt: 'html logo'},
            {name: 'Python3', logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png', alt: 'python logo'},
            {name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png', alt: 'github logo'},
            {name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', alt: 'git logo'},
            {name: 'Java', logo: 'https://cdn-icons-png.flaticon.com/512/226/226777.png', alt: 'Java logo'},
            {name: 'SQL', logo: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png', alt: 'sql logo'},
            {name: 'Jinja', logo: 'https://wholroyd.gallerycdn.vsassets.io/extensions/wholroyd/jinja/0.0.8/1494339408424/Microsoft.VisualStudio.Services.Icons.Default', alt: 'jinja logo'},
            {name: 'Flask', logo: 'https://d4.alternativeto.net/jmtD1yk6SqztgpCSDhUSho4OBc5dw1d9eIdiZktqzOY/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9mbGFza18yNzAwNC5wbmc.png', alt: 'flask logo'},
            {name: 'MongoDB', logo: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld', alt: 'mongo db logo'},
        ],
        projects: [{
                name: "Mind Blank",
                skills: ["React", "javascript", "html5", "css3", "github", "git"],
                url: "https://tomrgrant.github.io/Mind-Blank/",
                sourceCode: "https://github.com/TomRgrant/Mind-Blank",
                description: `Mind Blank was a group project where we were given 7 days to design, plan and build 
                an educational game app, as a group we decided we wanted to create a triva quiz app, we found an
                 api that we wanted to use and went from there, our agreed upon MVP was a game where the player
                  had a certain amount of time to answer as many questions as possible, the player should also 
                  be able to select the category and difficulty of the question given to them.`,
                thumbnail: mindBlank,
                screenshots: [],
                videoDemo: "",
            },
            {
            name: "Who's That Pokémon!?",
            url: "https://tomrgrant.github.io/Pokemon-api-weekend-hw/",
            sourceCode: "https://github.com/TomRgrant/Pokemon-api-weekend-hw",
            skills: ["JavaScript", "React", "HTML5", "CSS3", "github"],
            description: `Whos that Pokémon is a SPA app that uses the pokemon api to
            create a game where the user is show a image of a pokemon, they then have
            to type the name of the pokemon and guess. If they don't know the answer
            they can reveal the name or skip and go to the next Pokémon.`,
            thumbnail: pokemonthumb,
            screenshots: [],
            videoDemo: "youtube link........",
        },
        {
            name: "Gym Admin app",
            url: "https://github.com/TomRgrant/Gym-Admin-Project",
            sourceCode: "https://github.com/TomRgrant/Gym-Admin-Project",
            skills: ["Python3", "flask", "HTML5", "CSS3", "GitHub", "jinja", "sql"],
            description: `This was a project for our week 5 of CodeClan where we had one
            week to design, build, test and present a project using Python, Flask, SQL and Jinja. The
            brief was to build an app for a gym admin to be able to edit information stored
            in the app about members and classes.`,
            thumbnail: gymAdmin,
            screenshots: [],
            videoDemo: "",
        },
        {
            name: "Hacker News",
            skills: ["html5", "css3", "react", "javascript", "github"],
            url: "https://tomrgrant.github.io/Hacker-news/",
            sourceCode: "https://github.com/TomRgrant/Hacker-news",
            description: `This was a paired lab where we were given two hours to create an app that
            showed 20 articles from the Hacker News api, we were then given the freedom to how the actual
            function of the app would work, we decided we wanted to add a search feature where it shows you 
            articles that have the search text in it, it also highlights the search text in the title.`,
            thumbnail: hackerNews,
            screenshots: [],
            videoDemo: "",
        },
    ]
    }
    );




return(
    <>
    <div className="wrapper">

            <div className="z1">
            <section className="about-me">
                <div className="pfp" >
                    <img className="pfp-img" src={tom.pfp} />
                </div>
                <div className="about-me-box">
                    <AboutMe tom={tom} />
                </div>

            </section>

            <section className="skill-display">
                <h2 className="home-view-skills">My Skills</h2>
                <SkillList className="skill-list" skills={tom.skills} />
            </section>

            <section className="home-project-display">
                <h2 className="home-view-projects-title">My Projects</h2>
                <div className="home-project-display-elements">
                    <ProjectHomeCard projects={tom.projects} skills={tom.skills} />
                </div>
            </section>

            <section className="cv-button-div">
                <a href={Thomas_Grant_CV} download={Thomas_Grant_CV}>
                    <button className="cv-button">Download My CV</button>
                </a>
            </section>
            </div>
    </div>
    </>
);


};

export default PortfolioContainer;