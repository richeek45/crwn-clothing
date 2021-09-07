import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./sign-in.scss";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({email: '', password: ''});
  const dispatch = useDispatch();
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value});
  };

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span> Sign in with your email and password! </span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            handleChange={handleChange}
            value={email}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            handleChange={handleChange}
            value={password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> sign in</CustomButton>
            <CustomButton
              type="button"
              onClick={() => dispatch(googleSignInStart())}
              isGoogleSignIn
            >
              {" "}
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
}


export default SignIn;
