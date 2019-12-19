import PropTypes from "prop-types";
import React from "react";
import Fade from "react-reveal/Fade";

const Education = props => {
  const { theme } = props;

  return (
    <React.Fragment>
      <section className="education" id="education">
        <div className="education-container">
          <Fade bottom>
            <div className="education-description">
              <div className="section-title">
                <span>
                  <strong>Education</strong>
                </span>
              </div>
              <br />
              <p>
                I am currently a third year undergraduate student at the University of Minnesota,
                Twin Cities; my expected graduation date is May 2021, and I am pursuing a B.S. in
                Computer Science with a concentration in Software & Data Systems Development.
                Besides my computer science degree, I am also pursuing a Chinese Language &
                Literature minor.
                <br />
                <br />
                Relevant Coursework:
              </p>
              <ul className="course-list">
                <li>Data Structures & Algorithms</li>
                <li>Software Design and Development</li>
                <li>Internet Programming</li>
                <li>Linear Algebra and Differential Equations</li>
                <li>Practice of Database Systems</li>
                <li>Multivariable Calculus</li>
              </ul>
            </div>
          </Fade>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .education {
          background-color: ${theme.color.brand.dark};
          justify-content: center;
          padding-top: 60px;
          min-height: 100vh;
        }

        .section-title {
          width: 55%;
          min-width: 180px;
          height: 1.5em;
          border-bottom: 1px solid ${theme.color.brand.primary};
          text-align: left;
        }

        .education-description {
          width: 100%;
          padding: 60px;
        }

        /* 
          ##Device = Laptops, Desktops
          ##Screen = B/w 1025px and bigger
        */
        @from-width desktop {
          .course-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(300px, 350px));
            margin-top: 20px;
            overflow: hidden;
          }

          .education-container {
            transform: translateY(50%);
          }
        }

        /* 
          ##Device = Tablet and Phone
          ##Screen = B/w 1024px and smaller
        */
        @below desktop {
          .course-list {
            display: grid;
            grid-template-columns: repeat(2);
            margin-top: 20px;
            overflow: hidden;
          }
        }

        .education-container {
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

Education.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Education;
