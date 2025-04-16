import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './ExperienceRoom.css';

const ExperienceRoom = () => {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 1500); // 1.5 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="experience-room"
      className="experience-room"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="room-title">Experience & Education</h2>

      <h3 className="section-heading">Education</h3>

      
<div className="section-group">
        
        <div className="plaque">
          <h4>Macomb Community College</h4>
          <p>Associate's Degree in Computer Science</p>
          <p>2023 – Present</p>
        </div>
        <div className="plaque">
          <h4>University</h4>
          <p>Bachelor's Degree in Computer Science</p>
          <p>School: To be determined...</p>
          <p>Expected: 2027</p>
        </div>
      </div>

      <h3 className="section-heading">Experience</h3>


<div className="section-group">
        <div className="plaque">
          <h4>New Technologists Intern</h4>
          <p>Microsoft x Cyborg Mobile – Summer 2024</p>
          <p>Worked on a team of interns to design and build a web app after completing Web Development and Product Management Curriculum.</p>
        </div>
        <div className="plaque">
        <h4>HeadStart Tech Fellow</h4>
        <p>Ongoing</p>
        <p>Participating in professional development, technical workshops, and mentorship as part of a community of students from institutions around the nation.</p>
        </div>
        <div className="plaque">
        <h4>CodePath Technical Interview Prep Student</h4>
        <p>Ongoing</p>
        <p>Engaging in weekly educational sessions in order to develop technical skills and improve readiness for recruitment. Part of a community of CS students maximizing CodePath resources.</p>
        </div>
      </div>

    </motion.section>
  );
};

export default ExperienceRoom;

