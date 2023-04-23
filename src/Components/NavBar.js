import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Link } from "react-scroll"
import Thomas_Grant_CV from "../images/Thomas_Grant_CV.pdf"

const NavBar = ({ handleClick }) => {




return(
    <>
        <section className="nav-bar">
            <div className="nav-pages">
                <Link to="about-me" spy={true} smooth={true} offset={-10} duration={500}>
                <button onClick={handleClick} id="aboutMe" class="button-33" role="button">About Me</button>
                </Link>
                <Link to="skill-display" spy={true} smooth={true} offset={-10} duration={500}>
                <button handleClick={handleClick} id="skills" class="button-33" role="button">Skills</button>
                </Link>
                <Link to="home-view-projects-title" spy={true} smooth={true} offset={-10} duration={500}>
                <button onClick={handleClick} id="projects" class="button-33" role="button">Projects</button>
                </Link>
                <a href={Thomas_Grant_CV} download={Thomas_Grant_CV}>
                    <button className="button-33">Download My CV</button>
                </a>
            </div>







            <div className="nav-links">
                    <a className="nav-links" href="https://github.com/TomRgrant" target="_blank"> <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="git hub logo, link to thomas grant's github profile"/> </a>
                    <a className="nav-links" href="https://www.linkedin.com/in/thomas-grant-1063b126a/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="linkedin logo, link to thomas grant's linkedinpage"/> </a>
                    {/* <a className="nav-links" href="https://www.youtube.com/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/youtube-3.svg" alt="youtube logo, link to thomas grant's youtube page"/> </a> */}
            </div>
        </section>
    </>
);

};

export default NavBar;