import { styled } from "stitches.config";
import { motion } from 'framer-motion'
import { Link } from "@remix-run/react";
import { useLocation } from "@remix-run/react";

const Box = styled('div', {
  backgroundColor: "$theme-accent-default",
})

export default function About() {
    return (
        <motion.div>
        <motion.h1
          initial={{ y: 200 }}
          animate={{y :0 }}
          exit={{ y: -200 }}
          transition={{duration: 0.5}}
        >About Page</motion.h1>
        <motion.p
          initial={{ y: 100 }}
          animate={{y:0 }}
          exit={{ y:-100 }}
          transition={{duration: 0.5,  delay: 0.2}}
        >
          About Page Description text
        </motion.p>
      </motion.div>
    )
  }