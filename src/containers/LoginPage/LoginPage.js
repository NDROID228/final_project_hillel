import React, { useState } from "react";
import "./LoginPage.css";
import Button from "../../components/ButtonInterface/ButtonInterface";
import logo from "../../assets/img/somelogo.png";
import InputForm from "../../components/InputForm/InputForm";

const Login = (props) => {
  const [fieldsForm, setFieldsForm] = useState({ username: "", password: "" });
  const [errorText, setErrorText] = useState({ usernameInput: "Fill this box", passwordInput: "Fill this box" });

  const handleChange = (event) => {
    const value = event.target.value;
    if (value !== "") {
      setErrorText((prevState) => ({...prevState, [event.target.name + "Input"] : ""}));
    } else {
      setErrorText((prevState) => ({...prevState, [event.target.name + "Input"] : "Fill this box"}));
    }
    setFieldsForm((prevState) => ({...prevState, [event.target.name] : value}));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let TOKEN;
    try {
      const formData = JSON.stringify(fieldsForm);
      console.log(formData);
      const response = await fetch(
        "http://localhost:3001/password",
        {
          method: "POST",
          body: formData,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      if (!response.ok) {
        throw Error(response.statusText || 'Something wrong');
      }

      TOKEN = await response.json();
    } catch (err) {
      console.error(err);
    }

    if (TOKEN === null) {
      setErrorText({ usernameInput: "Incorrect username", passwordInput: "Incorrect password" })
    } else {
      setErrorText({ usernameInput: "", usernameInput: "" });
      localStorage.setItem("user_token", TOKEN);
    }
  }

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={ handleSubmit }>
        <img src={logo} alt="somelogo" className="logo"></img>
        <InputForm inputName="Username" type="text" changeHandler={ handleChange } />
        <label className="input-label" id="username">{ errorText.usernameInput }</label>
        <InputForm inputName="Password" type="password" changeHandler={ handleChange } />
        <label className="input-label" id="password">{ errorText.passwordInput }</label>
        <Button buttonName="LoginBtn" buttonText="Login" hasIcon="false" />
      </form>
    </div>
  );
};

export default Login;
