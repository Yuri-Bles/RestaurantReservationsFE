import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import UserService from "../services/UserService.jsx";
import "../styles/LoginAndRegister/Form.css"
import "../styles/page.css";
import "../styles/Input.css";
import "../styles/Button.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { checkAuthentication } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [submitError, setSubmitError] = useState("");

const registerAndLogin = async () => {
    const registered = await register();

    if (!registered) {
        return;
    }

    await login();
}

  const register = async () => {
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setRepeatPasswordError("");
    setSubmitError("");

    let hasError = false;

    if (!name.trim()) { 
      setNameError("Name cannot be empty.");
      hasError = true;
    }

    if (!email.trim()) { 
      setEmailError("E-mail cannot be empty.");
      hasError = true;
    }

    if (password.trim().length < 8) {
      setPasswordError("Password has to be at least 8 characters.");
      hasError = true;
    }

    if (repeatPassword != password) {
      setRepeatPasswordError("Passwords don't match");
      hasError = true;
    }

    if (hasError) {
        return false;
    }

    const user = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim()
    };

    try {
      const response = await UserService.createUser(user);

      if (response === null) { 
          setSubmitError(`Something went wrong internally, try again later`);
          return false;
      }
      else if (response.status != 201) {
          setSubmitError(`Something went wrong internally, try again later. ${response.status}: ${response.data.message}`);
          return false;
      }
    } 
    catch (error) {
      console.log("FULL ERROR:", error);

      if (error.response?.status === 400) {
          setSubmitError(`Incorrect values. ${error.response.status}: ${error.response.data.message}`);
          return false;
      }
      else if (error.response != null)
      {
          setSubmitError(`Something went wrong. ${error.response.status}: ${error.response.data.message}`);
          return false;
      }
      setSubmitError(`Something went wrong.`);

      console.error("Failed to create account:", error);
    }
    return true;
  }

  const login = async () => {
    const user = {
      email: email.trim(),
      password: password.trim()
    };

    try {
      const response = await UserService.login(user);

      if (response === null) { 
          setSubmitError(`Something went wrong internally, try again later`);
          return;
      }
      else if (response.status != 200) {
          setSubmitError(`Something went wrong internally, try again later. ${response.status}: ${response.data.message}`);
          return;
      }

      await checkAuthentication();

      navigate("/");
    } 
    catch (error) {
      console.log("FULL ERROR:", error);

      if (error.response?.status === 400) {
          setSubmitError(`Incorrect values. ${error.response.status}: ${error.response.data.message}`);
          return;
      }
      else if (error.response != null)
      {
          setSubmitError(`Something went wrong. ${error.response.status}: ${error.response.data.message}`);
          return;
      }
      setSubmitError(`Something went wrong.`);

      console.error("Failed to login:", error);
    }
  }

  return (
    <>
      <div className="page">
        <div className="center-content">
          <div className="form">
            <div className="container container_center">
              <h1 className="title">Register Page</h1>
            </div>
            <div className="container container_center">
              <input 
                className="textbox"
                type="text"
                placeholder="Name"
                required = {true}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="container">
              <p className="error-message">
                {nameError}
              </p>
            </div>
            <div className="container container_center">
              <input 
                className="textbox"
                type="text"
                placeholder="E-mail"
                required = {true}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="container">
              <p className="error-message">
                {emailError}
              </p>
            </div>
            <div className="container container_center">
              <input 
                className="textbox"
                type="password"
                placeholder="Password"
                required = {true}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="container">
              <p className="error-message">
                {passwordError}
              </p>
            </div>
            <div className="container container_center">
              <input 
                className="textbox"
                type="password"
                placeholder="Confirm Password"
                required = {true}
                onChange={(event) => setRepeatPassword(event.target.value)}
              />
            </div>
            <div className="container">
              <p className="error-message">
                {repeatPasswordError}
              </p>
            </div>
            <div className="container">
              <p className="error-message">
                {submitError}
              </p>
            </div>
            <div className="container container_center">
              <button className="primary-button" onClick={registerAndLogin}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}