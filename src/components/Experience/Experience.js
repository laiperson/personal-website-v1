/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import React from "react";
import Fade from "react-reveal/Fade";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const Experience = props => {
  const { theme } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const reactTheme = createMuiTheme({
    palette: {
      primary: {
        light: theme.color.brand.light,
        main: theme.color.brand.primary,
        dark: theme.color.brand.dark
      },
      secondary: {
        main: theme.color.brand.light
      }
    },
    overrides: {
      MuiTab: {
        root: {
          color: theme.color.brand.lightActive
        }
      }
    }
  });

  return (
    <React.Fragment>
      <section id="experience">
        <div className="experience-container">
          <Fade bottom>
            <div className="experience-description">
              <div className="section-title">
                <span>
                  <strong>Experience</strong>
                </span>
              </div>
              <br />

              <MuiThemeProvider theme={reactTheme}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor={theme.color.neutral.gray.a}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="C.H. Robinson" {...a11yProps(0)} />
                  <Tab label="Grouplens Research" {...a11yProps(1)} />
                  <Tab label="Microsoft" {...a11yProps(2)} />
                  <Tab label="University of Minnesota" {...a11yProps(3)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <h1>
                    Software Development Intern<span id="employer">@ C.H. Robinson</span>
                  </h1>
                  <h3>May 2018 - August 2018</h3>
                  <div className="job-description">
                    <ul className="course-list">
                      <li>
                        Focused on back-end software development with the Robinson Fresh delivery
                        team. This internship consisted of executing project deliverables for an
                        Agile team and carrying out team stories with the business goals in sight.
                        Worked in in an Agile Scrum team with C#, ServiceStack, Oracle SQL,
                        Microsoft SQL Server, and RESTful APIs.
                      </li>
                      <li>
                        Designed and built a full-stack web application tasked with automating the
                        actions of adding new hires to enterprise resources using an Angular
                        frontend, ASP.NET Core Web API with over ten REST API endpoints, and a SQL
                        Server backend
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <h1>
                    Undergraduate Student Researcher<span id="employer">@ Grouplens Research</span>
                  </h1>
                  <h3>August 2018 - Present</h3>
                  <div className="job-description">
                    <ul className="course-list">
                      <li>
                        Participating in socially impactful research utilizing machine learning, web
                        development, and other technologies to analyze and predict important social
                        phenomena.
                      </li>
                      <li>
                        Contributing to a full-stack web application tasked with collecting user
                        thoughts and leveraging the Mechanical Turk API to outsource positive
                        thoughts. The application uses ReactJS, Express, Node.js, MongoDB, and
                        Docker.
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <h1>
                    Service Engineer Intern<span id="employer">@ Microsoft</span>
                  </h1>
                  <h3>May 2019 - August 2019</h3>
                  <div className="job-description">
                    <ul className="course-list">
                      <li>
                        Automated and formalized the access and permissions process for new hires
                        across the Azure CXP organization that reduces onboarding wait time by at
                        least 1500% and improving new hire onboarding experience through a proactive
                        standard procedure
                      </li>
                      <li>
                        Designed and built a full-stack web application tasked with automating the
                        actions of adding new hires to enterprise resources using an Angular
                        frontend, ASP.NET Core Web API with over ten REST API endpoints, and a SQL
                        Server backend
                      </li>
                      <li>
                        Collaborated cross-functionally with stakeholders in cloud engineering,
                        program and team management disciplines to develop project vision and a
                        robust, scalable process
                      </li>
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <h1>
                    Student Software Developer
                    <span id="employer">@ University Center for Writing</span>
                  </h1>
                  <h3>September 2019 - Present</h3>
                  <div className="job-description">
                    <ul className="course-list">
                      <li>
                        Developing, planning, and maintaining the Center for Writing's full-stack
                        web application that leverages PHP, MySQL, JavaScript, CSS, and HTML. This
                        application allows students to schedule/manage appointments to help utilize
                        the Center for Writing as a resource.
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </MuiThemeProvider>
            </div>
          </Fade>
        </div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        #experience {
          background-color: ${theme.color.brand.dark};
          justify-content: center;
          min-height: 100vh;
        }

        button {
          color: white !important;
        }

        .section-title {
          width: 55%;
          min-width: 200px;
          height: 1.5em;
          border-bottom: 1px solid ${theme.color.brand.primary};
          text-align: left;
        }

        .experience-description {
          width: 100%;
          padding: 60px;
        }

        .course-list {
          margin-top: 20px;
          font-weight: ${theme.font.weight.standard};
          font-size: ${theme.font.size.xs};
          line-height: ${theme.font.lineHeight.l};
        }

        .experience-container {
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

        h1 {
          font-size: ${theme.font.size.m};
          color: ${theme.color.brand.light};
        }

        h3 {
          color: #45a29e;
          font-weight: 400;
          font-size: ${theme.font.size.s};
        }

        #employer {
          font-size: ${theme.font.size.s};
          padding-left: 15px;
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
          color: ${theme.color.brand.light};
          width: 100%;
        }

        li::before {
          content: "•";
          color: ${theme.color.brand.primary};
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        .job-description {
          width: 80%;
        }

        /* 
          ##Device = Laptops, Desktops
          ##Screen = B/w 1025px and bigger
        */
        @from-width desktop {
          .experience-container {
            transform: translateY(50%);
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Experience.propTypes = {
  theme: PropTypes.object.isRequired
};
export default Experience;
