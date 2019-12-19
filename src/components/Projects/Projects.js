import PropTypes from "prop-types";
import React from "react";
import Fade from "react-reveal/Fade";
import { graphql, useStaticQuery } from "gatsby";

import Project from "../Project";

const Projects = props => {
  const { theme } = props;

  const repoData = useStaticQuery(graphql`
    query RepoQuery {
      githubData(
        data: {
          viewer: {
            repositories: {
              edges: {
                elemMatch: {
                  node: {
                    isPrivate: { eq: false }
                    name: {}
                    shortDescriptionHTML: {}
                    updatedAt: {}
                    url: {}
                  }
                }
              }
            }
          }
        }
      ) {
        id
        data {
          viewer {
            repositories {
              edges {
                node {
                  name
                  shortDescriptionHTML
                  updatedAt(formatString: "MMMM, YYYY")
                  isPrivate
                  url
                }
              }
            }
          }
        }
      }
    }
  `);

  // Parse repository response objects for component
  const repositoryData = repoData.githubData.data.viewer.repositories.edges.map(repo => repo.node);

  return (
    <React.Fragment>
      <section id="projects">
        <div className="project-container">
          <div className="projects-description">
            <div className="section-title">
              <span>
                <strong>Projects</strong>
              </span>
            </div>
            <br />
            <div className="projects">
              {repositoryData.map((repository, i) => (
                <div className="project" key={i}>
                  <Fade bottom delay={i * 200} key={i}>
                    <Project
                      key={repository.url}
                      theme={theme}
                      name={repository.name}
                      description={repository.shortDescriptionHTML}
                      url={repository.url}
                      updatedAt={repository.updatedAt}
                    />
                  </Fade>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        #projects {
          background-color: ${theme.color.brand.dark};
          justify-content: center;
          min-height: 100vh;
          display: inline-block;
          width: 100%;
        }

        .projects {
          display: flex;
          flex-direction: row;
          overflow: auto;
          flex-wrap: wrap;
          padding: 10px;
        }

        /* 
          ##Device = Laptops, Desktops
          ##Screen = B/w 1025px and bigger
        */
        @from-width 1142px {
          .project {
            width: 32%;
          }

          .project-container {
            transform: translateY(25%);
          }
        }

        /* 
          ##Device = Tablet and Phone
          ##Screen = B/w 1024px and smaller
        */
        @below 1142px {
          .project {
            width: 45%;
          }
        }

        @below 760px {
          .project {
            width: 100%;
            margin: auto;
            margin-top: 20px;
          }
        }

        .section-title {
          width: 55%;
          min-width: 180px;
          height: 1.5em;
          border-bottom: 1px solid ${theme.color.brand.primary};
          text-align: left;
        }

        .projects-description {
          width: 100%;
          padding: 60px;
        }

        .project-container {
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
      `}</style>
    </React.Fragment>
  );
};

Projects.propTypes = {
  theme: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default Projects;
