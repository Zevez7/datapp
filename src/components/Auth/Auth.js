import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { authLogin } from "../../Actions/Index";

const styleAuth = {
  form: {
    width: 500,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 100,
    padding: 30
  },
  fontsize: {
    fontSize: "1.2rem"
  }
};

const Auth = props => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const handleFormInputData = (e, d) => {
    setLoginData({
      ...loginData,
      [d.name]: e.target.value
    });
  };

  const submitLogin = e => {
    e.preventDefault();
    props.authLoginRe(loginData.username);
    setLoginData({
      ...loginData,
      username: "",
      password: ""
    });
  };

  return (
    <>
      <div style={styleAuth.form}>
        <Form onSubmit={e => submitLogin(e)}>
          <Form.Field>
            <label style={styleAuth.fontsize}>User Name</label>
            <Input
              style={styleAuth.fontsize}
              placeholder="User Name"
              name="username"
              value={loginData.username}
              onChange={(e, d) => handleFormInputData(e, d)}
            />
          </Form.Field>
          <Form.Field>
            <label style={styleAuth.fontsize}>Enter Password</label>
            <Input
              style={styleAuth.fontsize}
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={(e, d) => handleFormInputData(e, d)}
            />
          </Form.Field>

          <Button
            type="submit"
            floated="right"
            color="green"
            style={styleAuth.fontsize}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  //****testing
  console.log("state", state);
  return {
    user: state.auth.user,
    state
  };
};

const mapDispatchToProps = {
  authLoginRe: authLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
