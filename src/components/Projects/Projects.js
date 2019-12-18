import PropTypes from "prop-types";
import React from "react";

const Projects = props => {
  const { theme } = props;

  return (
    <React.Fragment>
      <section id="projects">
        <div className="education-container">
          <div className="education-description">
            <div className="section-title">
              <span>
                <strong>Projects</strong>
              </span>
            </div>
            <br />
            <p>
              IN-PROGRESS for Projects using GitHub API. Create Project template
            </p>
          </div>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        #projects {
          background-color: ${theme.color.brand.dark};
          justify-content: center;
          min-height: 90vh;
        }

        .section-title {
          width: 55%;
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
          max-width: 1000px;
          margin: auto;
          transform: translateY(50%);
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

Projects.propTypes = {
  theme: PropTypes.object.isRequired
};

export default Projects;
