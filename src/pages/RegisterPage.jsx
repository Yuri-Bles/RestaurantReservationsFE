import "../styles/page.css";
import "../styles/Input.css";

export default function RegisterPage() {
  return (
    <>
      <div className="page">
        <div className="container">
          <h1 className="title">Register Page</h1>
        </div>
        <div className="container">
          <input 
            className="textbox"
            type="text"
            placeholder="Name"
            required = {true}
          />
        </div>
        <div className="container">
          <input 
            className="textbox"
            type="text"
            placeholder="E-mail"
            required = {true}
          />
        </div>
        <div className="container">
          <input 
            className="textbox"
            type="password"
            placeholder="Password"
            required = {true}
          />
        </div>
        <div className="container">
          <input 
            className="textbox"
            type="password"
            placeholder="Confirm Password"
            required = {true}
          />
        </div>
      </div>
    </>
  )
}