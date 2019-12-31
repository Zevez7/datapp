import React from "react";
import { connect } from "react-redux";
import { Table, Item, Button } from "semantic-ui-react";
import { DateTime } from "luxon";
import { deleteProject } from "../../Actions/Index";

const Admin = props => {
  const StringDateFormat = dateData => {
    return DateTime.fromISO(dateData).toLocaleString({
      month: "short",
      year: "numeric"
    });
  };
  const projectMap = props.project.map(item => {
    return (
      <Table celled compact column={5} key={item.id}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3" verticalAlign="middle">
              {item.name}

              <Button
                onClick={() => props.deleteProjectRx(item.id)}
                basic
                compact
                floated="right"
              >
                Delete
              </Button>

              <Button basic circular compact disabled floated="right">
                Edit
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>id</Table.Cell>
            <Table.Cell>{item.id}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={2}>web link</Table.Cell>
            <Table.Cell>
              <Item
                as="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.link}
              </Item>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>github link</Table.Cell>
            <Table.Cell>
              <Item
                as="a"
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.github}
              </Item>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>date</Table.Cell>
            <Table.Cell>{StringDateFormat(item.date)}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>stack</Table.Cell>
            <Table.Cell>{item.stack.join(", ")}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>info</Table.Cell>
            <Table.Cell>{item.info}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>color</Table.Cell>
            <Table.Cell>{item.color.join(", ")}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  });

  return <div>{projectMap}</div>;
};

const mapStateToProps = state => {
  return {
    project: state.home
  };
};

const mapDispatchToProps = {
  deleteProjectRx: deleteProject
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
