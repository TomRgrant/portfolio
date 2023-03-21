import React from "react";

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
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="git hub logo, link to thomas grant's github profile"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="linkedin logo, link to thomas grant's linkedinpage"/>
                <img src="https://cdn.worldvectorlogo.com/logos/youtube-3.svg" alt="youtube logo, link to thomas grant's youtube page"/>
            </div>
        </section>
    </>
);

};

export default NavBar;