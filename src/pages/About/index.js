import React, { useEffect } from 'react'

import SecondaryHero from "components/SecondaryHero";
import About from "components/About";
import Team from "components/Team";
import Skills from "components/Skills";

import { aboutPage } from "site-structure.js";

const AboutPage = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]); 

  return (
    <>
        <SecondaryHero img={aboutPage.heroImg} title={aboutPage.pageTitle} description={aboutPage.description} />

        <About />

        <Team />

        <Skills />
    </>
  )
}

export default AboutPage;