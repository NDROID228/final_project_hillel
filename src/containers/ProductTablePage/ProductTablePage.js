import "./ProductTablePage.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ButtonInterface/ButtonInterface";
import Table from "../../components/Table/Table";
import Logo from "../../assets/img/somelogo.png";
import ModalDelete from "../../components/ModalDelete/ModalDelete";

const ProductTablePage = (props) => {
  const [showModal, setShowModal] = useState({state: "hidden", id: null});
  const [productsArr, setProductsArr] = useState([]);
  const navigate = useNavigate();

  const redirectToPreview = () => {
    navigate("/preview");
  };

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
        <ModalDelete showModal={showModal} setShowModal={setShowModal} getDataTable={getDataTable} />
        <div className="box">
          <img className="logo" src={Logo} />
          <div className="table-buttons">
            <Button
              buttonName="ProductTableBtn"
              buttonText="Preview"
              hasIcon="true"
              onClickEvt={redirectToPreview}
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
              <Table products={productsArr} setShowModal={setShowModal}/>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default ProductTablePage;
