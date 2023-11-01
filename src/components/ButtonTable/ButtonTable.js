import "./ButtonTable.scss";
import iconEdit from "../../assets/img/ProductTable/edit.png";
import iconDelete from "../../assets/img/ProductTable/delete.png";

const ButtonTable = ({ typeBtn, onClickMethod }) => {
  const editOnClick = async () => {
    // let TOKEN;
    // try {
    //   const formData = JSON.stringify(fieldsForm);
    //   const response = await fetch("http://localhost:3001/editRow", {
    //     method: "POST",
    //     body: formData,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //   });

    //   if (!response.ok) {
    //     throw Error(response.statusText || "Something wrong");
    //   }

    //   TOKEN = await response.json();
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const iconBtn = typeBtn === "edit" ? iconEdit : iconDelete;

  return (
    <button className="button-table" onClick={onClickMethod}>
      <img src={iconBtn} className="button-table-img" />
    </button>
  );
};

export default ButtonTable;
