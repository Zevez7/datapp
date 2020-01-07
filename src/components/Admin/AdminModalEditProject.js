import React, { useState, useEffect } from "react";
import { Button, Confirm, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { editProject } from "../../Actions/Index";

const styleAdminModalEditProject = {
  button: { marginBottom: 10 },
  form: {
    padding: 30
  }
};

const AdminModalEditProject = props => {
  const { projectItem } = props;

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    id: projectItem.id,
    name: projectItem.name,
    link: projectItem.link,
    github: projectItem.github,
    date: projectItem.date,
    stack: projectItem.stack,
    color: projectItem.color,
    info: projectItem.info
  });

  const handleFormInputData = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openButton = () => setOpen(true);
  const closeButton = () => setOpen(false);

  const [stackString, setStackString] = useState(
    "React, Semantic-UI React, Firebase, Firestore"
  );

  const handleStack = e => {
    setStackString(e.target.value);
  };

  useEffect(() => {
    setFormData(f => {
      return {
        ...f,
        stack: stackString.split(", ")
      };
    });
  }, [stackString]);

  const [colorString, setColorString] = useState("#33FFBD, #33FF57, #75FF33");

  const handleColor = e => {
    setColorString(e.target.value);
  };

  useEffect(() => {
    setFormData(f => {
      return {
        ...f,
        color: colorString.split(", ")
      };
    });
  }, [colorString]);

  const submitButton = () => {
    closeButton();
    props.editProjectRx(formData);
  };
  const AddProject = (
    <Form style={styleAdminModalEditProject.form}>
      <Form.Field>
        <label>Name</label>
        <input
          placeholder="Name"
          name="name"
          required
          value={formData.name}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>
      <Form.Field>
        <label>Web Link</label>
        <input
          placeholder="Link"
          name="link"
          required
          value={formData.link}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>
      <Form.Field>
        <label>Github</label>
        <input
          placeholder="Github"
          name="github"
          required
          value={formData.github}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>
      <Form.Field>
        <label>Date</label>
        <input
          placeholder="Date (ex 2019-04)"
          name="date"
          required
          value={formData.date}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>
      <Form.Field>
        <label>Color</label>
        <input
          placeholder="Color (ex color, color, color)"
          name="color"
          required
          value={colorString}
          onChange={e => handleColor(e)}
        />
      </Form.Field>
      <Form.Field>
        <label>Stack</label>
        <input
          placeholder="stack (ex stack, stack, stack)"
          name="stack"
          required
          value={stackString}
          onChange={e => handleStack(e)}
        />
      </Form.Field>
      <Form.Field>
        <label>Info</label>
        <input
          placeholder="Info"
          name="info"
          required
          value={formData.info}
          onChange={e => handleFormInputData(e)}
        />
      </Form.Field>
    </Form>
  );

  return (
    <>
      <Button
        onClick={openButton}
        content="Edit"
        basic
        compact
        floated="right"
        style={styleAdminModalEditProject.button}
      />
      <Confirm
        open={open}
        onCancel={closeButton}
        onConfirm={submitButton}
        content={AddProject}
        confirmButton={"Submit"}
      />
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = {
  editProjectRx: editProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminModalEditProject);
