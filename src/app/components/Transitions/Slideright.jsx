'use client'

import { motion } from 'framer-motion'

function Slideright({children}) {
    return (
        <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    transition={{
    duration: 0.8,
    delay: 0.3,
    ease: [0, 0.71, 0.2, 1.01]
    }}
    variants={{
    visible: { opacity: 1, y: 0},
    hidden: { opacity: 0, y: 50}
    }}
    >
        {children}
    </motion.div>
      )
}

export default Slideright