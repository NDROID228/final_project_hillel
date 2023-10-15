import "./ProductTablePage.css";
import React, { useState, useEffect, useRef } from "react";
import Button from "../../components/ButtonInterface/ButtonInterface";
import Table from "../../components/Table/Table";
import Logo from "../../assets/img/somelogo.png";

const ProductTable = (props) => {
  const [productsArr, setProductsArr] = useState([]);

  const getDataTable = async () => {
    let json;

    try {
      const response = await fetch("http://localhost:3001/infoTable");

      if (!response.ok) {
        throw Error(response.statusText || "Something wrong");
      }

      json = await response.json();
    } catch (err) {
      console.error(err);
    }
    
    let productsArr = JSON.parse(json);
    
    setProductsArr(productsArr);
  };
  
  useEffect(() => {
    getDataTable();
  }, []);

  return (
    <React.StrictMode>
      <div className="container">
        <div className="box">
          <img className="logo" src={Logo} />
          <div className="table-buttons">
            <Button
              buttonName="ProductTableBtn"
              buttonText="Preview"
              hasIcon="true"
            />
            <Button
              buttonName="ProductTableBtn"
              buttonText="Add product"
              hasIcon="true"
            />
          </div>
          <h1 className="table-title">Products</h1>
          <div className="table-products-list-container">
            <div className="table-products-list">
              <Table products={productsArr} />
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default ProductTable;
