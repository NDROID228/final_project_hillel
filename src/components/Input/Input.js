import eyeOpened from "../../assets/img/Login/eye_opened.png";
import eyeClosed from "../../assets/img/Login/eye_closed.png";
import "./Input.css";

const Input = (props) => {
    const showPassword = (event) => {
        const input = event.target.parentElement.querySelector('input');
        const icon = event.target;
        if (input.type === "password") {
            input.type = "text";
            icon.src = eyeOpened;
        } else {
            input.type = "password";
            icon.src = eyeClosed;
        }
    }

    if (props.inputName === "Password") {
        return (
            <div className="input-box">
                <input 
                    type="password" 
                    id={props.inputName} 
                    placeholder={props.inputName} 
                    className="input"
                ></input>
                <img className="show-btn" src={eyeClosed} onClick={showPassword} alt="eye"></img>
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
    
}

export default Input;