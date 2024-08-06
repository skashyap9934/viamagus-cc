// Packages / Libraries
import React from "react";

// Stylesheets
import "../styles/login.css";

// Assests
import amazonLogo from "../assets/amazon_logo.webp";
import trees from "../assets/trees.png";
import tree from "../assets/tree.jpg";

// Variables
const initState = { status: "", email: "", password: "" };

const Login = () => {
  const [credentails, setCredentails] = React.useState({
    email: "",
    password: "",
  });

  const [msg, setMsg] = React.useState({...initState});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentails({ ...credentails, [name]: value });
    setMsg({ ...initState, [name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(credentails.email) && credentails.password)
      setMsg({ ...msg, status: "Login Successful" });
    else {
      if (!regex.test(credentails.email))
        setMsg({ ...msg, email: "Invalid Email Address" });
      else setMsg({ ...initState, password: "Invalid Password" });
    }
  };

  return (
    <div className="login">
      <img className="trees-img" src={trees} alt="trees" />
      <div>
        <header style={{ width: "100%" }}>
          <img className="amazon-logo" src={amazonLogo} alt="logo" />
        </header>
        <div className="login-body">
          <div>
            <p
              style={{
                fontSize: "21px",
                color: "#2BBB22",
                textAlign: "center",
              }}
            >
              Login
            </p>
            <img className="tree" src={tree} alt="tree" />
          </div>
          <div className="inputs">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <p className="msg-err">{msg.email}</p>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <p className="msg-err">{msg.password}</p>
            <button className="submit-btn" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <p className="msg">{msg.status}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
