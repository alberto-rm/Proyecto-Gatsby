import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Skills from "../components/skills"
import ToggleTheme from "../components/toogleTheme"

const Cara = () => (
  <Layout>
    <ToggleTheme />
    <Parallax pages={5}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={1} />
      <Skills offset={2} factor={1} />
      <About offset={3} factor={1} />
      <Contact offset={4} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
