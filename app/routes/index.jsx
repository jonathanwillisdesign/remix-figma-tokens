import { styled } from "stitches.config";
import { motion } from 'framer-motion'
import { useLocation } from "@remix-run/react";

const Box = styled('div', {
  backgroundColor: "$theme-accent-default",
})

export default function Index() {
  return (
          <motion.div>
            <motion.h1
              initial={{ y: 200 }}
              animate={{y :0 }}
              exit={{ y: -200 }}
              transition={{duration: 0.5}}
            >Home Page</motion.h1>
            <motion.p
              initial={{ y: 100 }}
              animate={{y:0 }}
              exit={{ y:-100 }}
              transition={{duration: 0.5,  delay: 0.2}}
            >
              Home Page Description text
            </motion.p>
          </motion.div>
          
  )
}