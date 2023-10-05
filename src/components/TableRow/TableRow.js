import "./TableRow.css";
import ButtonTable from "../ButtonTable/ButtonTable";

const TableRow = ({ rowValue }) => {
  const rowArray = [];
  rowValue.map((value) => {
    rowArray.push(value);
  });

  return (
    <tr>
      <td>{ rowArray[0] }</td>
      <td>{ rowArray[1] }</td>
      <td>{ rowArray[2] }</td>
      <td>{ rowArray[3] }</td>
      <td>{ rowArray[4] }</td>
      <td
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
