import "./Table.css";
import React, { useState, useEffect } from "react";
import TableRow from "../TableRow/TableRow";

const Table = ({products}) => {
  const [productsArr, setProducts] = useState([]);

  useEffect(() => {
    let tempArr = [];
    products.map((data) => {
      tempArr.push(<TableRow rowValue={data} />);
    });
    setProducts(tempArr);
  }, [products]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price ($)</th>
          <th style={{ width: "5rem" }}></th>
        </tr>
      </thead>
      <tbody>
        { productsArr }
      </tbody>
    </table>
  );
};

export default Table;
