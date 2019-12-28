import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";

class IndexPage extends React.Component {
  separator = React.createRef();

  scrollToContent = e => {
    this.separator.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const {
      data: {
        bgDesktop: {
          resize: { src: desktop }
        },
        bgTablet: {
          resize: { src: tablet }
        },
        bgMobile: {
          resize: { src: mobile }
        },
        avatar: {
          resize: { src: avatar }
        }
      }
    } = this.props;

    const backgrounds = {
      desktop,
      tablet,
      mobile
    };

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Hero scrollToContent={this.scrollToContent} backgrounds={backgrounds} theme={theme} />
          )}
        </ThemeContext.Consumer>

        <hr ref={this.separator} />

        <ThemeContext.Consumer>
          {theme => <AboutMe id="aboutme" theme={theme} avatar={avatar} />}
        </ThemeContext.Consumer>

        <ThemeContext.Consumer>{theme => <Education theme={theme} />}</ThemeContext.Consumer>

        <ThemeContext.Consumer>{theme => <Experience theme={theme} />}</ThemeContext.Consumer>

        <ThemeContext.Consumer>{theme => <Projects theme={theme} />}</ThemeContext.Consumer>

        <style jsx>{`
          hr {
            margin: 0;
            border: 0;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default IndexPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(sort: { order: DESC }) {
      edges {
        node {
          excerpt
        }
      }
    }
    bgDesktop: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 1200, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgTablet: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 800, height: 1100, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    bgMobile: imageSharp(fluid: { originalName: { regex: "/hero-background/" } }) {
      resize(width: 450, height: 850, quality: 90, cropFocus: CENTER) {
        src
      }
    }
    avatar: imageSharp(fluid: { originalName: { regex: "/avatar/" } }) {
      resize(width: 300, height: 300, quality: 90, cropFocus: CENTER) {
        src
      }
    }
  }
`;

//hero-background
