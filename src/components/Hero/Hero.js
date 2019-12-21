import React from "react";
import PropTypes from "prop-types";

import LinkedInLogo from "../../images/svg-icons/linkedin.svg";
import EmailLogo from "../../images/svg-icons/email.svg";
import GithubLogo from "../../images/svg-icons/github.svg";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  let iconStyles = {
    display: "inline-block",
    fill: "green"
  };

  return (
    <React.Fragment>
      <section className="hero">
        <h1>I am Ben Wiley.</h1>
        <h3>Undergraduate Student. Full-Stack Web Developer.</h3>
        <button onClick={scrollToContent} aria-label="scroll">
          Learn More
        </button>
        <div className="icons">
          <a href="https://www.linkedin.com/in/benwileymn/" style={iconStyles}>
            <LinkedInLogo id="linkedin" />
          </a>
          <a href="mailto:wiley.ben77@gmail.com" style={iconStyles}>
            <EmailLogo id="email" />
          </a>
          <a href="https://github.com/BenWileyUMN" style={iconStyles}>
            <GithubLogo id="github" />
          </a>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        :global(svg#email) {
          display: inline-block;
          fill: ${theme.color.brand.primary};
          height: 40px;
          width: 40px;
        }

        :global(svg#linkedin) {
          display: inline-block;
          fill: ${theme.color.brand.primary};
          height: 40px;
          margin-right: 5px;
        }

        :global(svg#github) {
          display: inline-block;
          fill: ${theme.color.brand.primary};
          height: 35px;
          margin-bottom: 3px;
          margin-right: 5px;
        }

        :global(svg#linkedin:hover, svg#email:hover, svg#github:hover) {
          transform: scale(1.3);
        }

        .icons {
          position: absolute;
          bottom: 20px;
        }

        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        h3 {
          text-align: center;
          font-size: ${theme.hero.h3.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h3.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
          font-weight: 410;
        }

        button {
          background: none;
          color: white;
          border: 1;
          border-color: ${theme.color.brand.primary};
          font-size: ${theme.font.size.s};
          padding: ${theme.space.s} ${theme.space.m};
          cursor: pointer;
          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }
          :hover {
            background: rgba(102, 252, 241, 0.3);
          }
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.m};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
