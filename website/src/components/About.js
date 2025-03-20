import React from 'react';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>Hi there! I am Kamsi, a HeadStart Fellowship fellow.</p>
            <p>I am currently rounding up my second year at Macomb Community College. I am pursuing a Bachelor's Degree in Computer Science and a career in Software Engineering.</p>
            <p>I am passionate about using technology to create a meaningful impact in the world and empowering underrepresented and underserved communities. I have gained some experience with programming, web development and UI design through my studies, self-teching, internships and hackathons.</p>
            <p>In my spare time, I enjoy reading and cooking.</p>

            <h3>These are some of my Experiences:</h3>
            <dl>
                <dt>New Tech Intern @Microsoft</dt>
                <dd>Describe my time at Microsoft</dd>

                <dt>HeadStart Fellowship</dt>
                <dd>Describe my time at HeadStart</dd>

                <dt>CodePath TIP</dt>
                <dd>Describe codepath course</dd>

                <dt>Hack Dearborn 3</dt>
                <dd>Describe Hackathon</dd>
            </dl>

        </section>
    );
};

export default About;