import eyeOpened from "../../assets/img/Login/eye_opened.png";
import eyeClosed from "../../assets/img/Login/eye_closed.png";
import "./InputForm.css";

const Input = (props) => {
    
    if (props.inputName === "Password") {
        return (
            <div className="input-box">
                <input
                    name="password"
                    type="password"
                    id={props.inputName} 
                    placeholder={props.inputName} 
                    className="input"
                    onChange={ props.changeHandler }
                />
                <img className="show-btn" src={eyeClosed} alt="eye"></img>
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
            onChange={ props.changeHandler }
            />
        </div>
    );
    
}

export default Input;