'use client'

import { motion } from 'framer-motion'

function Slideleft({children}) {
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
visible: { opacity: 1, x: 0},
hidden: { opacity: 0, x: -50}
}}
>
    {children}
</motion.div>
  )
}

export default Slideleft