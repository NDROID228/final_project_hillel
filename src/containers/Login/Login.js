import "./Login.css";
import Input from "../../components/Input/Input";
import logo from "../../assets/img/Login/somelogo.png";
import Button from "../../components/Button/Button";

const Login = (props) => {
  return (
    <div className="form-container">
      <img src={logo} alt="somelogo" className="logo"></img>
      <Input inputName="Username" />
      <Input inputName="Password" />
      <Button />
    </div>
  );
};

export default Login;
