import { styled } from "stitches.config";
import { motion } from 'framer-motion'
import { Link } from "@remix-run/react";
import { useLocation } from "@remix-run/react";
const Box = styled('div', {
  backgroundColor: "$theme-accent-subtle",
})

export default function Blog() {
    return (
        <motion.div layout>
        <motion.h1
          initial={{ y: 200 }}
          animate={{y :0 }}
          exit={{ y: -200 }}
          transition={{duration: 0.5}}
        >Blog Page</motion.h1>
        <motion.p
          initial={{ y: 100 }}
          animate={{y:0 }}
          exit={{ y:-100 }}
          transition={{duration: 0.5,  delay: 0.2}}
        >
          Blog Page Description text
        </motion.p>
      </motion.div>

    )
  }