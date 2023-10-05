import "./ButtonEdit.css";
import iconEdit from "../../assets/img/ProductTable/edit.png";

const ButtonEdit = (props) => {
    return (
        <button className="button-edit">
            <img src={ iconEdit } className="button-edit-img"/>
        </button>
    )
}

export default ButtonEdit;