import "./TableRow.css";
import ButtonTable from "../ButtonTable/ButtonTable";

const TableRow = ({ rowValue }) => {
  return (
    <tr key={"tr-" + rowValue.id}>
      <td key={"td-id-" + rowValue.id}>{rowValue.id}</td>
      <td key={"td-category-" + rowValue.id}>{rowValue.category}</td>
      <td key={"td-name-" + rowValue.id}>{rowValue.name}</td>
      <td key={"td-quantity-" + rowValue.id}>{rowValue.quantity}</td>
      <td key={"td-price-" + rowValue.id}>{rowValue.price}</td>
      <td
        key={"td-button-" + rowValue.id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <ButtonTable icon="edit" />
        <ButtonTable icon="delete" />
      </td>
    </tr>
  );
};

export default TableRow;
// <TableRow rowValue=["ID", "Category", "Name", "Quantity", "Price"] />
