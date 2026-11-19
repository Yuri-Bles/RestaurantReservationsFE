import { useState } from "react";
import "../styles/LoginAndRegister/Form.css"
import "../styles/page.css";
import "../styles/Input.css";
import "../styles/Button.css";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [submitError, setSubmitError] = useState("");

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
              <button className="primary-button" onClick={register}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}