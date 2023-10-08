import eyeOpened from "../../assets/img/Login/eye_opened.png";
import eyeClosed from "../../assets/img/Login/eye_closed.png";
import "./Input.css";

const Input = (props) => {
  if (props.inputName === "Password") {
    return (
      <div className="input-box">
        <input
          type="password"
          id={props.inputName}
          placeholder={props.inputName}
          className="input"
        ></input>
        <img className="show-btn" src={eyeClosed} alt="eye"></img>
      </div>
    );
  }

  return (
    <div className="input-box">
      <input
        type="text"
        id={props.inputName}
        placeholder={props.inputName}
        className="input"
      ></input>
    </div>
  );
};

export default Input;
