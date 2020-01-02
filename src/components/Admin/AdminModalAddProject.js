import React, { useState, useEffect } from "react";
import { Button, Confirm, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { addProject } from "./../../Actions/Index";
import uid from "uid";

const styleAdminModalAddProject = {
  button: { marginBottom: 10 },
  form: {
    padding: 30
  }
};

const AdminModalAddProject = props => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    id: uid(),
    name: "",
    link: "",
    date: "",
    stack: "",
    info: "",
    color: ""
  });

  const handleFormInputData = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //****testing
  console.log("formData", formData);

  const openButton = () => setOpen(true);
  const closeButton = () => setOpen(false);

  const [stackString, setStackString] = useState("");

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

  const [colorString, setColorString] = useState("");

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
    props.addProjectRx([formData]);
    setFormData({
      id: uid(),
      name: "",
      link: "",
      date: "",
      stack: "",
      info: "",
      color: ""
    });
  };

  const AddProject = (
    <Form style={styleAdminModalAddProject.form}>
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
      </Form.Field>{" "}
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
    <div>
      <div>
        <Button
          onClick={openButton}
          content="Add New Project"
          positive
          floated="right"
          style={styleAdminModalAddProject.button}
          icon="plus"
          size="large"
        />
        <Confirm
          open={open}
          onCancel={closeButton}
          onConfirm={submitButton}
          content={AddProject}
          confirmButton={"Submit"}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  addProjectRx: addProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminModalAddProject);
