import React from "react";

const AboutMe = ({tom}) => {




return(
    <>
    <section className="about-me-info-box">
        <div className="about-me-contact-info">
            <p>Email: {tom.email}</p>
            <a className="about-me-links" href={tom.linkedin} target="_blank">LinkedIn</a>
            <a className="about-me-links" href={tom.github} target="_blank">GitHub</a>
        </div>
        <div className="about-me-text">
            <p className="margin-0">Hey there, I'm Tom! I'm a student at CodeClan and a self-proclaimed expert in all things video games.
                When I'm not busy coding, you can find me adding to my collection of pub quiz wooden spoons - yes, I'm the reigning champion
                of coming last! But in all seriousness, I've had a lifelong passion for computers and programming, starting with my love for
                video games. However, once I discovered the world of software development, I knew I had found my true calling. I'm particularly
                passionate about front-end development and enjoy working with JavaScript, CSS, and React.
            </p>
        </div>
    </section>
    </>
);

};

export default AboutMe;