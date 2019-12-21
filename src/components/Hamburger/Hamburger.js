import React from "react";
import PropTypes from "prop-types";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerActive: this.props.active
    };
  }

  handleToggle = () => {
    this.setState(prevState => ({
      hamburgerActive: !prevState.hamburgerActive
    }));
    this.props.toggleMenu(this.state.hamburgerActive);
  };

  render() {
    return (
      <React.Fragment>
        <button
          id="toggle-main-menu-mobile"
          className={`hamburger hamburger--slider ${this.props.active ? "is-active" : ""}`}
          type="button"
          onClick={this.props.toggleHamburger}
        >
          <div className={this.props.active ? "change bar1" : "bar1"}></div>
          <div className={this.props.active ? "change bar2" : "bar2"}></div>
          <div className={this.props.active ? "change bar3" : "bar3"}></div>
        </button>

        <style jsx>{`
          .bar1,
          .bar2,
          .bar3 {
            width: 30px;
            height: 3px;
            background-color: ${this.props.theme.color.brand.primary};
            margin: 6px 0;
            transition: 0.4s;
          }
          #toggle-main-menu-mobile {
            position: absolute;
            right: 30px;
            width: 40px;
            background: none;
            border: none;
          }

          .change.bar1 {
            -webkit-transform: rotate(-45deg) translate(-9px, 6px);
            transform: rotate(-45deg) translate(-9px, 6px);
          }

          .change.bar2 {
            opacity: 0;
          }

          .change.bar3 {
            -webkit-transform: rotate(45deg) translate(-8px, -8px);
            transform: translate3d(0, -7px, 0) rotate(45deg);
          }

          .hamburger-box {
            width: 32px;
            height: 19px;
            display: inline-block;
            position: relative;
          }

          .hamburger-inner {
            width: 32px;
            height: 3px;
            background: #fff;
          }

          .hamburger {
            padding: 0;
            outline: none;
            z-index: 10;
            cursor: pointer;
            height: 40px;
          }

          .hamburger &:focus {
            outline: none;
          }
          .hamburger > .hamburger-inner,
          .hamburger-inner::before,
          .hamburger-inner::after {
            background: #fff;
          }
          .hamburger > .hamburger-inner::after {
            width: 18px;
            right: 0;
          }
          .hamburger &.is-active {
            .hamburger-inner::after {
              width: inherit;
              right: unset;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

Hamburger.propTypes = {
  toggleMenu: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  toggleHamburger: PropTypes.func.isRequired
};

export default Hamburger;
