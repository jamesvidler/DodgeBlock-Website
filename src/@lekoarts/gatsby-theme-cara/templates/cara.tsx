import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Reviews from "../components/reviews"

const Cara = () => {
  return (
  <Layout>
    <Parallax pages={8}>
        <Hero offset={0} factor={1} />
        <Projects offset={1} factor={2} />
        <Reviews offset={3} factor={2} />
        <About offset={5} factor={2} />
        <Contact offset={7} factor={1} />
    </Parallax>
  </Layout>
)}

export default Cara