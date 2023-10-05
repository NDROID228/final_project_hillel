import "./ButtonDelete.css";
import iconDelete from "../../assets/img/ProductTable/delete.png";

const ButtonDelete = (props) => {
    return (
        <button className="button-delete">
            <img src={ iconDelete } className="button-delete-img" />
        </button>
    )
}

export default ButtonDelete;