import PropTypes from "prop-types";
import React from "react";

import GithubLogo from "../../images/svg-icons/github.svg";

const Project = props => {
  const { theme, name, description, url, updatedAt } = props;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  // Transform date object to readable format
  var dateObj = new Date(updatedAt);
  var updated = months[dateObj.getMonth()] + ", " + dateObj.getFullYear().toString();

  return (
    <React.Fragment>
      <div className="project-container">
        <h1 className="project-title">{name}</h1>
        <div className="project-text-body">
          <p>{description}</p>
        </div>
        <a href={url}>
          <GithubLogo className="githubLogo" id={`github-logo-${name}`} aria-label={`github-logo-${name}`} />
        </a>
        <div className="pull-right">{updated}</div>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .project-container {
          background-color: ${theme.color.brand.light};
          position: relative;
          top: 0px;
          height: 200px;
          cursor: default;
          margin: 0px;
          padding: 20px;
          border-radius: 8px;
          transition: all 0.25s ease 0s;
          margin-top: 30px;
          margin-right: 20px;
          box-shadow: 0;
        }

        .project-container:hover {
          -webkit-transform: scale(1.05);
          -ms-transform: scale(1.05);
          transform: scale(1.05);
          transition: all 0.25s ease 0s;
        }

        .project-title {
          color: ${theme.color.brand.darkActive};
          padding-bottom: 4px;
          padding-top: 0px;
          font-size: ${theme.font.size.s};
          font-weight: 600;
          text-transform: uppercase;
          display: table;
          margin: 8px 0px;
          border-bottom: 5px solid ${theme.color.brand.primary};
        }

        .project-text-body {
          box-sizing: border-box;
          width: 100%;
          margin: 0px;
          max-height: 90px;
          overflow: auto;
        }

        :global(svg.githubLogo) {
          position: relative;
          height: 40px;
          fill: ${theme.color.brand.darkActive};
          bottom: 0;
        }

        :global(svg.githubLogo:hover) {
          transform: scale(1.2);
        }

        a {
          position: absolute;
          bottom: 0;
          height: 40px;
        }

        .pull-right {
          box-sizing: border-box;
          background-color: ${theme.color.brand.primary};
          color: ${theme.color.brand.darkActive};
          position: absolute;
          display: inline;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          right: 0px;
          bottom: 0px;
          clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);
          margin: 0px;
          padding: 10px 10px 10px 20px;
          border-radius: 0px 0px 8px;
        }
      `}</style>
    </React.Fragment>
  );
};

Project.propTypes = {
  theme: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired
};

export default Project;
