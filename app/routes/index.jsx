import { styled } from "stitches.config";
import { motion } from 'framer-motion'
import { useLocation } from "@remix-run/react";

const Box = styled( motion.div , 'div', {
  backgroundColor: "$theme-accent-default",
  width: '100px',
  height: '200px'
})

export default function Index() {
  return (
          <motion.div layout>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{opacity: 1, y :0 }}
              exit={{ opacity: 0, y: -110 }}
              transition={{duration: 0.5, delay: 0.5}}
            >Home Page</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 110 }}
              animate={{opacity: 1, y:0 }}
              exit={{ opacity: 0, y:-100 }}
              transition={{duration: 0.5, delay: 0.7}}
            >
              Home Page Description text
            </motion.p>
            <Box layoutId="box" transition={{duration: 1}}
              // exit={{ width: 300, height: 400, backgroundColor: 'var(--colors-theme-accent-subtle)'}}
              />
          </motion.div>
          
  )
}