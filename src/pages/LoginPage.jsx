import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import UserService from "../services/UserService.jsx";
import "../styles/LoginAndRegister/Form.css"
import "../styles/page.css";
import "../styles/Input.css";
import "../styles/Button.css";

export default function LoginPage() {
  const { checkAuthentication } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitError, setSubmitError] = useState("");

  const login = async () => {
    setEmailError("");
    setPasswordError("");
    setSubmitError("");

    let hasError = false;

    if (!email.trim()) { 
      setEmailError("E-mail cannot be empty.");
      hasError = true;
    }

    if (password.trim().length < 8) {
      setPasswordError("Password has to be at least 8 characters.");
      hasError = true;
    }

    if (hasError) {
        return;
    }

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
              <h1 className="title">Login Page</h1>
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
            <div className="container">
              <p className="error-message">
                {submitError}
              </p>
            </div>
            <div className="container container_center">
              <button className="primary-button" onClick={login}>
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}