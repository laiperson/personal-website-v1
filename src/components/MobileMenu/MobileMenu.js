import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const MenuMobile = props => {
  const { theme, active, toggleMenu, toggleHamburger } = props;

  const items = [
    { to: "/", label: "Home" },
    { to: "/#about-me", label: "About" },
    { to: "/#education", label: "Education" },
    { to: "/#experience", label: "Experience" },
    { to: "/#projects", label: "Projects" }
  ];

  return (
    <React.Fragment>
      <div id="main-menu-mobile" className={`main-menu-mobile ${active ? "open" : ""}`}>
        <ul>
          {items.map(item => (
            <li key={item.label}>
              <Link to={item.to} onClick={(toggleMenu, toggleHamburger)} id={item.label}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .button_container {
          position: fixed;
          top: 5%;
          right: 2%;
          height: 27px;
          width: 35px;
          cursor: pointer;
          z-index: 100;
          transition: opacity 0.25s ease;

          &:hover {
            opacity: 0.7;
          }

          &.active {
            .top {
              transform: translateY(11px) translateX(0) rotate(45deg);
              background: ${theme.color.brand.primary};
            }
            .middle {
              opacity: 0;
              background: ${props.theme.color.brand.primary};
            }

            .bottom {
              transform: translateY(-11px) translateX(0) rotate(-45deg);
              background: ${props.theme.color.brand.primary};
            }
          }

          span {
            background: ${props.theme.color.brand.dark};
            border: none;
            height: 5px;
            width: 100%;
            position: absolute;
            top: 0;
            padding-top: 11px;
            left: 0;
            transition: all 0.35s ease;
            cursor: pointer;

            &:nth-of-type(2) {
              top: 11px;
            }

            &:nth-of-type(3) {
              top: 22px;
            }
          }
        }

        .main-menu-mobile {
          position: fixed;
          background: ${theme.color.brand.dark};
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.35s, visibility 0.35s, height 0.35s;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          &.open {
            opacity: 0.9;
            visibility: visible;
            height: 100%;
            z-index: 10;
            li {
              animation: fadeInRight 0.5s ease forwards;
              animation-delay: 0.35s;
              &:nth-of-type(2) {
                animation-delay: 0.4s;
              }
              &:nth-of-type(3) {
                animation-delay: 0.45s;
              }
              &:nth-of-type(4) {
                animation-delay: 0.5s;
              }
              &:nth-of-type(5) {
                animation-delay: 0.55s;
              }
              &:nth-of-type(6) {
                animation-delay: 0.6s;
              }
            }
          }
          ul {
            font-size: 2rem;
            font-family: ${theme.font.family.intial};
            text-align: center;
            list-style: none;
            padding: 0;
            margin: 0;
            flex: 0;
            color: red;
            li {
              display: block;
              position: relative;
              opacity: 0;
              a {
                display: block;
                position: relative;
                color: white;
                text-decoration: none;
                overflow: hidden;
                &:hover:after,
                &:focus:after,
                &:active:after {
                  width: 100%;
                }

                &:after {
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 50%;
                  width: 0%;
                  transform: translateX(-50%);
                  height: 3px;
                  transition: 0.35s;
                }
              }
            }
          }
        }

        @keyframes fadeInRight {
          0% {
            opacity: 0;
            left: 20%;
          }
          100% {
            opacity: 1;
            left: 0;
          }
        }

        .lock-scroll {
          overflow: hidden;
        }

        :global(a#menuLink) {
          text-decoration: none;
          color: ${theme.color.brand.light};
          font-family: ${theme.font.family.target};
        }
        :global(a#menuLink:after) {
          content: "";
          width: 0px;
          height: 2px;
          display: block;
          background: ${theme.color.brand.primary};
          transition: 300ms;
        }

        :global(a#menuLink:hover:after) {
          width: 100%;
        }
      `}</style>
    </React.Fragment>
  );
};

MenuMobile.propTypes = {
  active: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  toggleHamburger: PropTypes.func.isRequired
};

export default MenuMobile;
