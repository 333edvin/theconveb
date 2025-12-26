'use client'
import { motion } from 'framer-motion';

function Zoomout({children}) {
  return (
    <motion.div initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
transition={{
duration: 0.8,
delay: 0.1,
ease: [0, 0.71, 0.2, 1.01]
}}
variants={{
visible: { opacity: 1, scale: 1},
hidden: { opacity: 0, scale: 0.5}
}}
>
    {children}
</motion.div>
  )
}

export default Zoomout