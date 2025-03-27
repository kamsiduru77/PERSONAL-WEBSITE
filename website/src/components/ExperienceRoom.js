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


      {showBubble && (
        <motion.div
          className="avatar-commentary side-bubble"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/avatar-placeholder.png" className="avatar-mini" alt="Kamsi Avatar" />
          <div className="speech-bubble small">
            <Typewriter
              words={["I started my CS journey at community college — it’s where I built my foundation. I plan to transfer to a 4-year in the Fall, though I'm still deciding which one."]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </div>
        </motion.div>
      )}

      
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


      {showBubble && (
        <motion.div
          className="avatar-commentary side-bubble"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/avatar-placeholder.png" className="avatar-mini" alt="Kamsi Avatar" />
          <div className="speech-bubble small">
            <Typewriter
              words={["I've had some memorable experiences so far. I'm already learning so much and can't wait for what's next!"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </div>
        </motion.div>
      )}

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

