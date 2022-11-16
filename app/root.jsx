import {
  Links,
  LiveReload,
  NavLink,
  Meta,
  Scripts,
  useOutlet,
  ScrollRestoration,
  useLocation
} from "@remix-run/react";

import { AnimatePresence, motion } from 'framer-motion'

import styles from './styles/reset.css'

export function meta() {
  return {
    charset: 'utf-8',
    title: 'New Remix App',
    viewport: 'width=device-width,initial-scale=1',
  }
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
  const outlet = useOutlet();

  console.log(useLocation().pathname)
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blogs</NavLink>
        </nav>
        <AnimatePresence mode='popLayout'>
          <motion.main
            key={useLocation().pathname}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 1 }}
          >
            {outlet}
          </motion.main>
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}