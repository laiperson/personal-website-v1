import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <footer className="footer">
        <ul>
          <li>
            Created by{" "}
            <a className="footerLink" href="https://github.com/BenWileyUMN">
              Ben Wiley
            </a>
          </li>
          <li>
            Code on{" "}
            <a className="footerLink" href="https://github.com/BenWileyUMN">
              GitHub
            </a>
          </li>
          <li>
            Deployed on{" "}
            <a className="footerLink" href="https://www.netlify.com/">
              Netlify
            </a>
          </li>
        </ul>
      </footer>

      {/* --- STYLES --- */}
      <style jsx>{`
        .footerLink {
          color: ${theme.color.brand.dark};
        }
        .footer {
          background: ${theme.color.brand.lightActive};
          padding: ${theme.space.default} ${theme.space.default};
          padding-bottom: ${theme.space.l};

          ul {
            list-style: none;
            text-align: center;
            padding: 0;

            li {
              color: ${theme.color.neutral.gray.g};
              font-size: ${theme.font.size.xxs};
              padding: ${theme.space.default} ${theme.space.default};
              position: relative;
              display: inline-block;

              &::after {
                position: absolute;
                right: ${`calc(${theme.space.xs} * -1)`};
              }
              &:last-child::after {
                content: "";
              }
            }
          }
        }

        @from-width desktop {
          .footer {
            padding: ${theme.space.default} ${theme.space.default};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string,
  theme: PropTypes.object.isRequired
};

export default Footer;
