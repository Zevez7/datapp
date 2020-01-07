import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { userLogin } from "./../../Actions/Index";

const styleAuth = {
  form: {
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 100,
    padding: 30
  },
  fontsize: {
    fontSize: "1.1rem"
  }
};

const Auth = props => {
  const [loginData, setLoginData] = useState({
    email: "dat@gmail.com",
    password: "dat@gmail.com"
  });

  const handleFormInputData = (e, d) => {
    setLoginData({
      ...loginData,
      [d.name]: e.target.value
    });
  };

  if (props.user) {
    props.history.push("/");
  } else {
    console.log("no login push");
  }

  const submitLogin = e => {
    e.preventDefault();
    props.userLoginRx(loginData);
    setLoginData({
      ...loginData,
      loginName: "",
      password: ""
    });
  };

  console.log("Login Render");

  return (
    <>
      <div style={styleAuth.form}>
        <Form onSubmit={e => submitLogin(e)}>
          <Form.Field>
            <label style={styleAuth.fontsize}>Email</label>
            <Input
              style={styleAuth.fontsize}
              placeholder="Email"
              name="email"
              value={loginData.email}
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
          {props.errorMsg ? props.errorMsg : null}
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
  return {
    user: state.auth.user,
    errorMsg: state.auth.errorMsg
  };
};

const mapDispatchToProps = {
  userLoginRx: userLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
