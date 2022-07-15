import React, { useState, useEffect } from 'react';
import {
  Button, Form, Segment, Grid
} from 'semantic-ui-react';
import Snowflake from '../SnowFlake.gif';

const LoginForm = (props) => {
  const { setStep } = props;

  const handleLoginSubmit = () => {
    setStep(3);
  };

  const handleSignUpSubmit = () => {
    setStep(2);
  };

  return (
    <>
      <div className="main-login-container">
        {/* login form */}
        <Grid>
            <Grid.Column mobile={16} tablet={8} computer={4} largeScreen={2} widescreen={1}>
                <div className="to-signup-div">
                  <img
                    className="weather-logo"
                    src={Snowflake}
                    alt="weather-gif"
                  />
                </div>
                <div className="front-page-button">
                  <Button
                    color="teal"
                    type="submit"
                    onClick={handleSignUpSubmit}
                  >
                    Sign Up
                  </Button>
                </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4} largeScreen={2} widescreen={1}>
                <div className="login-form-div">
                  <Form>
                    <Form.Field>
                      <label>Email</label>
                      <input placeholder="First Name" />
                    </Form.Field>
                    <Form.Field>
                      <label>Password</label>
                      <input placeholder="Last Name" />
                    </Form.Field>
                    <div className="front-page-button">
                      <Button
                        color="teal"
                        type="submit"
                        onClick={handleLoginSubmit}
                      >
                        Login
                      </Button>
                    </div>
                  </Form>
                </div>
            </Grid.Column>
        </Grid>
      </div>
    </>
  );
};

export default LoginForm;
