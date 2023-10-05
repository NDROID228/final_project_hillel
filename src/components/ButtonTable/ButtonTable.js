import "./ButtonTable.css";
import iconEdit from "../../assets/img/ProductTable/edit.png";
import iconDelete from "../../assets/img/ProductTable/delete.png";

const ButtonTable = (props) => {
    const icon = props.icon === "edit" ? iconEdit : iconDelete;

    return (
        <button className="button-table">
            <img src={ icon } className="button-table-img" />
        </button>
    )
}

export default ButtonTable;