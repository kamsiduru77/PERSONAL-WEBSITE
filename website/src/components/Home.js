import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // optional: for styling

const Home = () => {
    return (
        <motion.section
            id="home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="home-section"
        >
            <h2 className="home-heading">👋 Hi, I'm Kamsi</h2>
            <p className="home-text">
                Welcome to my personal website. Let's journey through my growth, experiences, and aspirations in tech.
            </p>
        </motion.section>
    );
};

export default Home;
