'use client'

import { motion } from 'framer-motion';

const letterAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const containerAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Letters = ({ text }) => {
  return (
    <motion.div
      className="inline-block"
      variants={containerAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Animation triggers only once when in view
    >
      {text.split('').map((letter, index) => (
        <motion.span key={index} variants={letterAnimation} className="inline-block">
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Letters;
