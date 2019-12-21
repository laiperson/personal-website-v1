import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import config from "../../../content/meta/config";
import Hamburger from "../Hamburger";
import MobileMenu from "../MobileMenu";

import logo from "../../images/png/BWTransparent.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
      fixed: false,
      hamburgerActive: false
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive
    }));
  };

  toggleHamburger = () => {
    this.setState(prevState => ({
      hamburgerActive: !prevState.hamburgerActive
    }));
    this.toggleMenu(this.state.hamburgerActive);
  };

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false });
    } else {
      this.setState({ fixed: true });
    }
  };

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";

    return `${fixed} ${homepage}`;
  };

  render() {
    const { pages, path, theme } = this.props;
    const { fixed } = this.state;

    return (
      <React.Fragment>
        <header className={`header ${this.getHeaderSize()}`}>
          <Link to="/" className="logoType">
            <div className="logo">
              <img src={logo} alt={config.siteTitle} />
            </div>
          </Link>
          <MobileMenu
            active={this.state.menuActive}
            theme={theme}
            toggleMenu={this.toggleMenu}
            toggleHamburger={this.toggleHamburger}
          />
          <Hamburger
            toggleMenu={this.toggleMenu}
            toggleHamburger={this.toggleHamburger}
            theme={theme}
            active={this.state.hamburgerActive}
          />
        </header>
        <VisibilitySensor onChange={this.visibilitySensorChange}>
          <div className="sensor" />
        </VisibilitySensor>

        {/* --- STYLES --- */}
        <style jsx>{`
          .header {
            align-items: center;
            justify-content: center;
            background-color: ${theme.color.neutral.white};
            display: flex;
            height: ${theme.header.height.default};
            position: relative;
            top: 0;
            width: 100%;
            align-items: center;

            :global(a.logoType) {
              align-items: center;
              display: flex;
              flex-direction: "column";
              color: ${theme.color.brand.light};

              .logo {
                flex-shrink: 0;
              }
            }

            &.homepage {
              position: absolute;
              background-color: transparent;
              height: ${theme.header.height.homepage};
            }
          }

          h1 {
            font-size: ${theme.font.size.m};
            font-weight: ${theme.font.weight.standard};
            margin: ${theme.space.stack.xs};
          }

          h2 {
            color: ${theme.color.brand.primary};
            font-weight: ${theme.font.weight.standard};
            font-size: ${theme.font.size.xxs};
            letter-spacing: 0;
            margin: 0;
          }

          .logo {
            display: inline-block;
            height: 100%;
            margin: ${theme.space.inline.default};
            overflow: hidden;
            transition: all 0.5s;

            .homepage & {
              height: 90px;
            }

            img {
              height: 100%;
            }
          }

          .sensor {
            display: block;
            position: absolute;
            bottom: 0;
            z-index: 1;
            left: 0;
            right: 0;
            height: 1px;
            top: ${path === "/" ? theme.header.height.homepage : theme.header.height.default};
          }

          @from-width tablet {
            .header {
              padding: ${theme.space.inset.l};

              &.homepage {
                height: ${theme.header.height.homepage};
              }
            }
          }

          @from-width desktop {
            .header {
              align-items: center;
              background-color: ${theme.color.neutral.white};
              display: flex;
              position: absolute;
              top: 0;
              width: 100%;
              justify-content: space-between;
              transition: padding 0.5s;

              &.fixed {
                height: ${theme.header.height.fixed};
                background-color: ${theme.color.brand.dark};
                left: 0;
                padding: 0 ${theme.space.m};
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1;
              }
            }

            .header :global(a.logoType) {
              text-align: left;
              flex-direction: row;
              flex-shrink: 0;
              width: auto;
            }

            .logo {
              margin: ${theme.space.inline.default};

              .fixed & {
                height: 50px;
                padding-left: ${theme.space.l};
              }

              .header.homepage:not(.fixed) & {
                border: none;
              }
            }

            img {
              animation-duration: ${theme.time.duration.default};
              animation-name: h2Entry;
            }

            @keyframes h2Entry {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  pages: PropTypes.array,
  path: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Header;
