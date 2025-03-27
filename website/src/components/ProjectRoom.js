import React from 'react';
import './ProjectRoom.css';

const projects = [
  {
    title: "SaveCircle",
    description: "A web app built at a hackathon to help groups track their savings toward a shared goal.",
    tech: ["Java", "Android Studio", "Figma"],
    link: "https://devpost.com/software/savecircle"
  },
  {
    title: "Personal Website",
    description: "This very site! Created to showcase my journey, experience, and creative side.",
    tech: ["React", "Framer Motion", "JavaScript"],
    link: "https://github.com/kamsiduru77/PERSONAL-WEBSITE"
  },
  {
    title: "VerifAI",
    description: "A live, automated fact-checker in the form of a widget for easy verification of audio-based information. Built as a final project for the New Technologists Program.",
    tech: ["React", "JavaScript", "Azure OpenAI", "Make CRM"],
    //link: ""
  }
];

const ProjectRoom = () => {
  return (
    <section id="project-room" className="project-room">
      <h2>Projects </h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech:</strong> {project.tech.join(', ')}</p>
            {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                    View Project
                    </a>)}
         </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectRoom;
