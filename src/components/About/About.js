import React from "react";
import { makeStyles } from "@material-ui/styles";

import AboutCSS from "./About.css";

// CSS
const useStyles = makeStyles({ ...AboutCSS });

// Driver component
function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.image}>
          <img
            alt="Darshan"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQGtWm6DYqL8dg/profile-displayphoto-shrink_100_100/0/1608177914950?e=1649894400&v=beta&t=K5D8UVR12aZTjWBd21QFcXIzr1Vh3elV3XNAJEjEodw"
          />
        </div>

        <div className={classes.container}>
          <h2 className={classes.header}>Value 1</h2>

          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nisi,
            justo, suscipit condimentum tellus tristique massa risus.
            Condimentum maecenas in nibh felis quis sit augue consectetur
            pulvinar. Dui nibh nibh sit et elementum. Pretium consequat,
            pharetra urna nisl tristique aliquet. Suspendisse congue ornare elit
            adipiscing sed justo. Posuere nullam tortor sed rutrum. At proin
            suspendisse at quis nulla. Sit et nulla hendrerit facilisis risus
            suscipit. Adipiscing nunc cras nibh velit aliquam arcu ut. Dolor,
            sed amet id accumsan tellus lobortis non aliquam pretium. Tellus,
            laoreet proin elit velit volutpat porttitor arcu nisl. Aliquet ut
            quam nunc arcu maecenas. Facilisis sem lacus duis sed nisl sem nisl
            at nunc. Pretium tristique quisque a dui commodo tempor eget.
          </p>

          <h2 className={classes.header}>Value 1</h2>

          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nisi,
            justo, suscipit condimentum tellus tristique massa risus.
            Condimentum maecenas in nibh felis quis sit augue consectetur
            pulvinar. Dui nibh nibh sit et elementum. Pretium consequat,
            pharetra urna nisl tristique aliquet. Suspendisse congue ornare elit
            adipiscing sed justo. Posuere nullam tortor sed rutrum. At proin
            suspendisse at quis nulla. Sit et nulla hendrerit facilisis risus
            suscipit. Adipiscing nunc cras nibh velit aliquam arcu ut. Dolor,
            sed amet id accumsan tellus lobortis non aliquam pretium. Tellus,
            laoreet proin elit velit volutpat porttitor arcu nisl. Aliquet ut
            quam nunc arcu maecenas. Facilisis sem lacus duis sed nisl sem nisl
            at nunc. Pretium tristique quisque a dui commodo tempor eget.
          </p>
        </div>
      </div>

      <div className={classes.mapBox}>
        <div className={classes.information}>
          <p>Mobile No. : 9404168827</p>
          <p>Email : dchobarkar@gmail.com</p>
          <p>
            Address : "Sudarshan", Dindayal Colony, <br />
            Mandva Road,
            <br />
            Ambajogai 431517
          </p>

          <p>LinkedIn</p>
          <p>Email</p>
        </div>

        <div className={classes.map}></div>
      </div>
    </React.Fragment>
  );
}

export default About;
