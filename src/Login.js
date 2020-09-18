import React, { useState } from "react";
/*import axios from 'axios';
import { setUserSession } from './Utils/Common';*/
import { Button, FormGroup, FormControl/*, ControlLabel*/ } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /*function validateForm() {
    return (username.length > 0 && password.length > 0);
  }*/

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    /*axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value })
    .then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    })
    .catch(err => {
      setLoading(false);
      if (err.response.status === 401) setError(err.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });*/
  }

  return (
    <div className="Login">
      <form>
        <FormGroup controlId="email" bsSize="large">
        Email
          <FormControl
            autoFocus
            type="email"
            {...username}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
        Password
          <FormControl
            {...password}
            type="password"
          />
        </FormGroup>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}
        <Button block onClick={handleLogin} bsSize="large" disabled={loading} type="submit" value={loading ? 'Loading...' : 'Login'}>
          Login
        </Button>
      </form>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
