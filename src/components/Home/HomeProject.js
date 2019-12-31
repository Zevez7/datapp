import React from "react";
import { Grid, Item } from "semantic-ui-react";
import { DateTime } from "luxon";

const styleProject = {
  title: {
    textAlign: "left",
    padding: 5
  },
  column: {
    marginTop: 30
  },
  description: {
    padding: 5
  },
  columnBox: {
    padding: 5
  }
};

const StringDateFormat = dateData => {
  return DateTime.fromISO(dateData).toLocaleString({
    month: "short",
    year: "numeric"
  });
};

const HomeProject = props => {
  const { name, link, github, date, stack, info, color } = props.data;

  return (
    <>
      <Grid.Column style={styleProject.column}>
        <Grid>
          <Grid.Column
            mobile={12}
            tablet={5}
            computer={6}
            style={styleProject.columnBox}
          >
            <a href={link}>
              <div
                style={
                  color && {
                    background: `linear-gradient(45deg, ${color[0]}, ${color[0]} 40%, ${color[1]} 40%, ${color[1]} 60%, ${color[2]} 60%, ${color[2]})`,
                    height: 70,
                    width: 70,
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "1px solid whitesmoke"
                  }
                }
              ></div>
            </a>
          </Grid.Column>
          <Grid.Column
            style={styleProject.title}
            verticalAlign="middle"
            mobile={12}
            tablet={11}
            computer={10}
          >
            <Item>
              <Item.Content>
                <Item.Header
                  as="a"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </Item.Header>
                <Item.Meta>{StringDateFormat(date)}</Item.Meta>
                <Item.Description
                  as="a"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Item.Description>
              </Item.Content>
            </Item>
          </Grid.Column>
          <Grid.Column width={16} style={styleProject.description}>
            <Item>
              <Item.Content>
                <Item.Description>{info}</Item.Description>
                <Item.Description>{stack.join(", ")}</Item.Description>
              </Item.Content>
            </Item>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </>
  );
};

export default HomeProject;
