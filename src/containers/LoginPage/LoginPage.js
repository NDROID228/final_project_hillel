import "./LoginPage.css";
import Input from "../../components/Input/Input";
import Button from "../../components/ButtonInterface/ButtonInterface";
import logo from "../../assets/img/somelogo.png";

const Login = (props) => {
  return (
    <div className="form-container">
      <div className="form-box">
        <img src={logo} alt="somelogo" className="logo"></img>
        <Input inputName="Username" />
        <Input inputName="Password" />
        <Button buttonName="LoginBtn" buttonText="Login" hasIcon="false" />
      </div>
    </div>
  );
};

export default Login;
