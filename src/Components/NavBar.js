import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"

const NavBar = () => {




return(
    <>
        <section className="nav-bar">
            <div className="nav-pages">
                <button class="button-33" role="button">Home</button>
                <button class="button-33" role="button">About Me</button>
                <button class="button-33" role="button">Skills</button>
                <button class="button-33" role="button">Projects</button>
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