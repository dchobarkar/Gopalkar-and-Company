import React from "react";
import { makeStyles } from "@material-ui/styles";

import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "./About/About";
import Testinomials from "./Testinomials/Testinomials";
import Contact from "./Contact/Contact";

import LandingPageCSS from "./LandingPage.css";

// CSS
const useStyles = makeStyles({ ...LandingPageCSS });

// Driver component
function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />

      <Services />

      <About />

      <Testinomials />

      <Contact />
    </div>
  );
}

export default LandingPage;