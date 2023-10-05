import "./ButtonInterface.css";
import iconPlus from "../../assets/img/ProductTable/plus.png";
import iconAdmin from "../../assets/img/ProductTable/admin.png";

const Button = (props) => {
  const buttonName = props.buttonName;
  const buttonText = props.buttonText;
  const hasIcon = props.hasIcon === "true";
  
  if(hasIcon && buttonText !== undefined) {
    let icon = buttonText === "Preview" ? iconAdmin : iconPlus;
    return (
    <button className={buttonName}>
        <div className="ProductTableBtnIcon">
            <img src={icon} />
        </div>
        <div className="ProductTableBtnText">
            {buttonText}
        </div>
    </button>);
  }

  return (
  <button className={buttonName}>
    {buttonText}
  </button>
  );
};

export default Button;
// <Button buttonName="LoginBtn" buttonText="Login" hasIcon="false" />