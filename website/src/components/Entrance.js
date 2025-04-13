import React from 'react';
import { motion } from 'framer-motion';
import './Entrance.css';

const Entrance = ({ onEnter }) => {
  return (
    <motion.div
      className="entrance-hall"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="spotlight-glow">
        <img
          src="/avatar-placeholder.png"
          alt="Kamsi Avatar"
          className="avatar-entrance"
        />
      </div>
      <div className="welcome-text">
        <h1 className="museum-title">Welcome to Kamsi Duru's Digital Museum</h1>
        <p className="museum-subtext">
          Step into my journey through tech, creativity, and ambition.
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="enter-museum-button"
        onClick={onEnter}
      >
        Enter Museum
      </motion.button>
    </motion.div>
  );
};

export default Entrance;
