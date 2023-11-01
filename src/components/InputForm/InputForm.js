import "./InputForm.scss";
import eyeOpened from "../../assets/img/Login/eye_opened.png";
import eyeClosed from "../../assets/img/Login/eye_closed.png";
import { useReducer } from "react";

const Input = (props) => {
  const initialState = {
    isEyeClosed: true,
    eye: eyeClosed,
    inputType: "password",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case true:
        return { isEyeClosed: true, eye: eyeClosed, inputType: "password" };
      case false:
        return { isEyeClosed: false, eye: eyeOpened, inputType: "text" };
    }
  };

  const [eyeState, eyeChange] = useReducer(reducer, initialState);

  if (props.inputName === "Password") {
    return (
      <div className="input-box">
        <input
          name="password"
          type={eyeState.inputType}
          id={props.inputName}
          placeholder={props.inputName}
          className="input"
          onChange={props.changeHandler}
        />
        <img
          className="show-btn"
          onClick={() => eyeChange({ type: !eyeState.isEyeClosed })}
          src={eyeState.eye}
          alt="eye"
        ></img>
      </div>
    );
  }

  return (
    <div className="input-box">
      <input
        name="username"
        type="text"
        id={props.inputName}
        placeholder={props.inputName}
        className="input"
        onChange={props.changeHandler}
      />
    </div>
  );
};

export default Input;
