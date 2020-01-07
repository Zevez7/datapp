import React from "react";
import Sphere from "../images/aboutImg.png";
import { Image, Card, List, Grid, Icon, Placeholder } from "semantic-ui-react";

const styleAbout = {
  link: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    marginBottom: 30,
    width: 200,
    textAlign: "center"
  },
  placeholder: {
    height: 300,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "500rem"
  }
};

const About = () => {
  return (
    <>
      <Placeholder style={styleAbout.placeholder}>
        <Image
          src={Sphere}
          size="medium"
          circular
          centered
          className="imageRotate"
        />
      </Placeholder>

      <div style={styleAbout.link}>
        <a
          href="https://github.com/Zevez7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" size="huge" link />
        </a>
        <a
          href="https://www.linkedin.com/in/dat7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin" size="huge" link />
        </a>
      </div>
      <Grid columns={3} doubling centered>
        <Grid.Row>
          <Grid.Column>
            <Card centered>
              <Card.Content>
                <Card.Header>Tech Stack</Card.Header>

                <Card.Description>
                  <List.Item>React (1 year)</List.Item>
                  <List.Item>Redux (6 month)</List.Item>
                  <List.Item>Javascript ES6 (2 years)</List.Item>
                  <List.Item>Material UI (1 year)</List.Item>
                  <List.Item>Bootstrap 4 (2 year)</List.Item>
                  <List.Item>Firebase Firestore (1 year)</List.Item>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered>
              <Card.Content>
                <Card.Header>Experience</Card.Header>

                <Card.Description>
                  <List.Item>3 year web development</List.Item>
                  <List.Item>Project Management</List.Item>
                  <List.Item>Software development</List.Item>
                  <List.Item>Outsource Manager</List.Item>
                  <List.Item>Startup Founder</List.Item>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card centered>
              <Card.Content>
                <Card.Header>Interest</Card.Header>
                <Card.Description>
                  <List.Item>Healthcare</List.Item>
                  <List.Item>Front End Development</List.Item>
                  <List.Item>Public Health</List.Item>
                  <List.Item>Health IT</List.Item>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default About;
