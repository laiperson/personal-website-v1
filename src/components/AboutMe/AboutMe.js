import PropTypes from "prop-types";
import React from "react";
import Fade from "react-reveal/Fade";

import avatar from "../../images/jpg/avatar.jpg";

const AboutMe = props => {
  const { theme } = props;

  return (
    <React.Fragment>
      <section className="aboutme" id="about-me">
        <div className="about-content-container">
          <Fade bottom>
            <div className="about-me-description">
              <div className="section-title">
                <span>
                  <strong>About Me</strong>
                </span>
              </div>
              <br />
              <p>
                Hi! My name is Ben Wiley, and I am currently studying Computer Science at the
                University of Minnesota, Twin Cities. My interests lie at the intersection of web
                development and business applications; I am always looking to hone my abilities to
                create user-friendly, robust, and intuitive web applications that can help provide
                value to its end-users.
                <br />
                <br />
                At the University of Minnesota, I am pursuing a Bachelors of Science in Computer
                Science, Science, well as a minor in Chinese Language & Literature. Beyond the
                classroom, I participate in Human Computer Interaction research with Grouplens
                Research where I am able to employ computational resources to socially-impactful
                problems.
                <br />
                <br />
                Here are a few technologies I have worked with:
              </p>
              <ul className="technology-list">
                <li>Angular</li>
                <li>PHP</li>
                <li>SQL Server</li>
                <li>Docker</li>
                <li>ReactJS</li>
                <li>HTML/CSS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>C#</li>
                <li>Java</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="about-me-photo">
              <img src={avatar}></img>
            </div>
          </Fade>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .aboutme {
          background-color: ${theme.color.brand.dark};
          justify-content: center;
          min-height: 100vh;
        }

        .section-title {
          width: 100%;
          height: 1.5em;
          border-bottom: 1px solid ${theme.color.brand.primary};
          text-align: center;
        }

        /* 
          ##Device = Laptops, Desktops
          ##Screen = B/w 1025px and bigger
        */
        @from-width desktop {
          .about-content-container {
            transform: translateY(25%);
          }
          .about-me-photo {
            display: flex;
            position: relative;
            height: 40%;
            max-width: 300px;
            margin: auto;
          }

          .about-me-description {
            width: 60%;
            padding: 60px;
          }

          .technology-list {
            display: grid;
            grid-template-columns: repeat(3, minmax(100px, 150px));
            margin-top: 20px;
            overflow: hidden;
          }
        }

        /* 
          ##Device = Tablet and Phone
          ##Screen = B/w 1024px and smaller
        */
        @below desktop {
          .about-me-photo {
            display: block;
            position: relative;
            height: 40%;
            max-width: 300px;
            margin: auto;
          }

          .about-me-description {
            width: 100%;
            padding: 60px;
          }

          .technology-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(100px, 150px));
            margin-top: 20px;
            overflow: hidden;
          }
        }

        @from-width tablet {
          .technology-list {
            display: grid;
            grid-template-columns: repeat(3, minmax(100px, 150px));
            margin-top: 20px;
            overflow: hidden;
          }
        }

        @below mobile {
          .technology-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(100px, 150px));
            margin-top: 20px;
            overflow: hidden;
          }
        }

        .about-content-container {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          max-width: 1366px;
          margin: auto;
        }

        span {
          font-size: ${theme.font.size.xl};
          color: ${theme.color.brand.primary};
          background-color: ${theme.color.brand.dark};
          padding: 0 10px;
          padding-left: 0;
        }

        p {
          color: ${theme.color.brand.light};
          display: inline-block;
          width: 100%;
          padding-top: 30px;
        }

        img {
          display: inline-block;
          cover: fit;
          border-radius: 50%;
          align-content: center;
          width: 100%;
        }

        ul {
          padding-left: 20px;
          list-style-type: none;
          list-style-position: inside;
          color: white;
          width: 100%;
        }

        li::before {
          content: "•";
          color: ${theme.color.brand.primary};
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }
      `}</style>
    </React.Fragment>
  );
};

AboutMe.propTypes = {
  theme: PropTypes.object.isRequired
};

export default AboutMe;
