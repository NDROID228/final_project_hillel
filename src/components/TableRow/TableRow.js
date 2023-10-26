import "./TableRow.css";
import ButtonTable from "../ButtonTable/ButtonTable";

const TableRow = ({ rowValue, setShowModal }) => {
  return (
    <tr key={"tr-" + rowValue.frontID}>
      <td>{rowValue.frontID}</td>
      <td>{rowValue.category}</td>
      <td>{rowValue.name}</td>
      <td>{rowValue.quantity}</td>
      <td>{rowValue.price}</td>
      <td
        key={"td-button-" + rowValue.frontID}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <ButtonTable typeBtn="edit" onClickMethod={() => (rowValue.frontID)} />
        <ButtonTable typeBtn="delete" onClickMethod={() => setShowModal({state: "", id: rowValue._id})} />
      </td>
    </tr>
  );
};

export default TableRow;
// <TableRow rowValue=["ID", "Category", "Name", "Quantity", "Price"] />
