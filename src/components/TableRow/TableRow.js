import "./TableRow.css";
import ButtonEdit from "../ButtonEdit/ButtonEdit";
import ButtonDelete from "../ButtonDelete/ButtonDelete";

const TableRow = (props) => {
  const [ID, Category, Name, Quantity, Price] = props.rowValue;

  return (
    <tr>
      <td>{ID}</td>
      <td>{Category}</td>
      <td>{Name}</td>
      <td>{Quantity}</td>
      <td>{Price}</td>
      <td
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <ButtonEdit />
        <ButtonDelete />
      </td>
    </tr>
  );
};

export default TableRow;
// <TableRow rowValue=["ID", "Category", "Name", "Quantity", "Price"] />
