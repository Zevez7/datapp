import React, { useState } from "react";
import { connect } from "react-redux";
import { Table, Item, Button, Confirm } from "semantic-ui-react";
import { DateTime } from "luxon";
import { deleteProject } from "../../Actions/Index";
import AdminModalAddProject from "./AdminModalAddProject";
import { Dimmer, Loader, Placeholder, Segment } from "semantic-ui-react";
import AdminModalEditProject from "./AdminModalEditProject";
import selectSortDate from "../../Selectors/selectSortDate";

const Admin = props => {
  const { user, authLoadingCompleted, sortedProjectByDate } = props;

  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteName, setDeleteName] = useState(null);

  //****testing
  console.log("authLoadingCompleted", authLoadingCompleted);

  // a modal will open when openDeleteButton is clicked.
  // passed into the function will be the itemId, it will also
  const openDeleteButton = (itemId, itemName) => {
    setDeleteId(itemId);
    setDeleteName(itemName);
    setOpen(true);
  };
  const closeButton = () => setOpen(false);

  const submitButton = () => {
    closeButton();

    props.deleteProjectRx(deleteId);
  };

  const StringDateFormat = dateData => {
    return DateTime.fromISO(dateData).toLocaleString({
      month: "short",
      year: "numeric",
      day: "numeric"
    });
  };
  const projectMap = sortedProjectByDate.map(item => {
    return (
      <Table celled compact column={5} key={item.id}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3" verticalAlign="middle">
              {item.name}

              <Button
                onClick={() => openDeleteButton(item.id, item.name)}
                basic
                compact
                floated="right"
              >
                Delete
              </Button>

              <AdminModalEditProject projectItem={item} />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>id</Table.Cell>
            <Table.Cell>{item.id}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={2}>web</Table.Cell>
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
            <Table.Cell>github</Table.Cell>
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
            <Table.Cell>info</Table.Cell>
            <Table.Cell>{item.info}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>stack</Table.Cell>
            <Table.Cell>
              {Array.isArray(item.stack) ? item.stack.join(", ") : item.stack}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>color</Table.Cell>
            <Table.Cell>
              {Array.isArray(item.color) ? item.color.join(", ") : item.color}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  });

  // rendering a loading screen while auth is being conducted
  // after completing authLoadingComplete, check if user is true or false
  // false user will get a redirect to home page
  const loaderComp = (
    <Segment>
      <Dimmer active inverted>
        <Loader size="massive" />
      </Dimmer>
      <Placeholder>
        <Placeholder.Header image>
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
        </Placeholder.Header>
        <Placeholder.Paragraph>
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
          <Placeholder.Line length="full" />
        </Placeholder.Paragraph>
      </Placeholder>
    </Segment>
  );

  let authLoadingLogic;
  if (authLoadingCompleted) {
    if (user) {
      authLoadingLogic = (
        <>
          <Confirm
            open={open}
            header={`Delete Confirmation`}
            onCancel={closeButton}
            onConfirm={submitButton}
            content={`${deleteName}`}
            confirmButton="Delete"
          />
          <AdminModalAddProject />
          {projectMap}
        </>
      );
    } else {
      props.history.push("/");
    }
  } else {
    authLoadingLogic = loaderComp;
  }

  return <div>{authLoadingLogic}</div>;
};

const mapStateToProps = state => {
  const SortedDate = selectSortDate(state);
  
  return {
    user: state.auth.user,
    authLoadingCompleted: state.auth.authLoadingCompleted,
    project: state.home,
    sortedProjectByDate: SortedDate
  };
};

const mapDispatchToProps = {
  deleteProjectRx: deleteProject
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
