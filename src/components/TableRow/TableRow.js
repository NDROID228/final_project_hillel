import "./TableRow.scss";
import ButtonTable from "../ButtonTable/ButtonTable";

const TableRow = ({
  rowValue,
  setShowModalDelete,
  setShowModalEdit,
  setFormTitle,
}) => {
  return (
    <tr>
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
        <ButtonTable
          typeBtn="edit"
          onClickMethod={() => {
            setShowModalEdit({ state: "", id: rowValue._id });
            setFormTitle("Edit product");
          }}
        />
        <ButtonTable
          typeBtn="delete"
          onClickMethod={() => {
            setShowModalDelete({ state: "", id: rowValue._id });
          }}
        />
      </td>
    </tr>
  );
};

export default TableRow;
// <TableRow rowValue=["ID", "Category", "Name", "Quantity", "Price"] />
