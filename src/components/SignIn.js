import React, { useState } from "react";

import PropTypes from "prop-types";

SignIn.propTypes = {};

function SignIn(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const onChange = () => {

  }

  return (
    <>
      <h1>Sign In</h1>
      <form>
        <input type='email' onChange={onChange}/>
        <input type='password' onChange={onChange} placeholder="Password"/>
        <button className="signInButton">Sign In</button>
      </form>
    </>
  );
}

export default SignIn;
