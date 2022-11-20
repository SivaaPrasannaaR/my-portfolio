import React, { useState } from "react"

// This sign up component is based on semantic-ui-react
import { Grid, Form, Segment, Button, Message } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import { SignUpType } from "../signup"

const RegisterA = (props: SignUpType) => {
  const { onSubmit, socialMediaOnClick } = props
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  return (
    <Grid verticalAlign="middle" textAlign="center">
      <Grid.Column style={{ width: "500px" }}>
        <Form>
          <Segment stacked>
            <Form.Input
              name={"username"}
              value={state.username}
              icon={"user"}
              iconPosition={"left"}
              onChange={(e) =>
                setState((s) => ({ ...s, username: e.target.value }))
              }
              type={"text"}
              placeholder={"Enter Username"}
            />
            <Form.Input
              name={"email"}
              value={state.email}
              icon={"mail"}
              iconPosition={"left"}
              onChange={(e) =>
                setState((s) => ({ ...s, email: e.target.value }))
              }
              type={"text"}
              placeholder={"Enter Email"}
            />
            <Form.Input
              name={"password"}
              value={state.password}
              icon={"lock"}
              iconPosition={"left"}
              onChange={(e) =>
                setState((s) => ({ ...s, password: e.target.value }))
              }
              type={"password"}
              placeholder={"Enter Password"}
            />
            <Form.Input
              name={"confirmPassword"}
              value={state.confirmPassword}
              icon={"lock"}
              iconPosition={"left"}
              onChange={(e) =>
                setState((s) => ({ ...s, confirmPassword: e.target.value }))
              }
              type={"password"}
              placeholder={"Enter Confirm Password"}
            />
            <Button
              onClick={() => {
                onSubmit(state.email, state.password, state.username)
              }}
            >
              Submit
            </Button>
            <Button onClick={() => socialMediaOnClick()}>
              Sign In With Google
            </Button>
          </Segment>
          <Message error>
            <h2>error</h2>
          </Message>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default RegisterA
