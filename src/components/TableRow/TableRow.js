import "./TableRow.css";
import ButtonTable from "../ButtonTable/ButtonTable";

const TableRow = ({ rowValue, setShowModal }) => {
  return (
    <tr key={"tr-" + rowValue.frontID}>
      <td key={"td-id-" + rowValue.frontID}>{rowValue.frontID}</td>
      <td key={"td-category-" + rowValue.frontID}>{rowValue.category}</td>
      <td key={"td-name-" + rowValue.frontID}>{rowValue.name}</td>
      <td key={"td-quantity-" + rowValue.frontID}>{rowValue.quantity}</td>
      <td key={"td-price-" + rowValue.frontID}>{rowValue.price}</td>
      <td
        key={"td-button-" + rowValue.frontID}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <ButtonTable key={"td-btn-edit-" + rowValue.frontID} typeBtn="edit" onClickMethod={() => (rowValue.frontID)} />
        <ButtonTable key={"td-btn-delete-" + rowValue.frontID} typeBtn="delete" onClickMethod={() => setShowModal({state: "", id: rowValue._id})} />
      </td>
    </tr>
  );
};

export default TableRow;
// <TableRow rowValue=["ID", "Category", "Name", "Quantity", "Price"] />
