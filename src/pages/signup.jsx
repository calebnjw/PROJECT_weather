import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Step } from "semantic-ui-react";

// sign up form component
const SignUpForm = (props) => {
  // import props from App component
  const { step, setStep, signUp, setSignUp } = props;
  // initialise useState for sign up input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputSubmit = (event) => {
    setStep(1);
    // condition: text box have value
    if ((firstName, lastName, username, email, password)) {
      console.log("first name: ", firstName, "last name: ", lastName);
      // store items value in an Obj
      const signUpObj = {
        firstName,
        lastName,
        username,
        email,
        password,
      };
      console.log("This is signUpObj: ", signUpObj);
      setSignUp(signUpObj);
      // input fields are reset
      setFirstName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setPassword("");
      event.preventDefault();
    } else {
      alert("Input fields are incorrect. Please check");
    }
  };
  // get input values
  const firstNameInput = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameInput = (event) => {
    setLastName(event.target.value);
  };
  const usernameInput = (event) => {
    setUsername(event.target.value);
  };
  const emailInput = (event) => {
    setEmail(event.target.value);
  };
  const passwordInput = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="to-sign-up">
        {/* signup form */}

        <div className="sign-up-form">
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="First name"
                placeholder="First name"
                type="text"
                onChange={firstNameInput}
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Last name"
                placeholder="Last name"
                type="text"
                onChange={lastNameInput}
              />
            </Form.Group>
            <Form.Field>
              <label>Username</label>
              <input
                placeholder="Username"
                type="text"
                onChange={usernameInput}
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Email" type="email" onChange={emailInput} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                onChange={passwordInput}
              />
            </Form.Field>
            <div className="front-page-button">
              <Button color="teal" type="submit" onClick={handleInputSubmit}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;