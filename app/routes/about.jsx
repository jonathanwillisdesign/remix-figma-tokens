import { styled } from "stitches.config";
import { motion } from 'framer-motion'
import { Link } from "@remix-run/react";
import { useLocation } from "@remix-run/react";

const Box = styled( motion.div , 'div', {
    backgroundColor: "$theme-accent-subtle",
    width: '50%',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100vh',

    variants: {
        rounded: {
            true: {
                borderRadius: '20px'
            }
        }
    }
  })

export default function About() {
    return (
        <motion.div layout>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{opacity: 1,y :0 }}
          exit={{ opacity: 0, y: -110 }}
          transition={{duration: 0.5, delay: 0.5}}
        >About Page</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 110 }}
          animate={{opacity: 1, y:0 }}
          exit={{ opacity: 0, y:-100 }}
          transition={{duration: 0.5,  delay: 0.7}}
        >
          About Page Description text
        </motion.p>
        <Box layoutId="box" transition={{duration: 0.5}} initial={{backgroundColor: 'var(--colors-theme-accent-subtle)'}} exit={{ backgroundColor: 'var(--colors-theme-accent-default)'}}/>
      </motion.div>
    )
  }


function newFunction() {
    { /* // exit={{
  // width: 100,
  // height: 200,
  // backgroundColor: 'var(--colors-theme-accent-default)'
  // }}/> */
    }
}
