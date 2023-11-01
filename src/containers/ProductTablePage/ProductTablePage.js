import "./ProductTablePage.scss";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ButtonInterface/ButtonInterface";
import Table from "../../components/Table/Table";
import Logo from "../../assets/img/somelogo.png";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import ModalEdit from "../../components/ModalEdit/ModalEdit";

const ProductTablePage = (props) => {
  const [showModalDelete, setShowModalDelete] = useState({
    state: "hidden",
    id: null,
  });
  const [showModalEdit, setShowModalEdit] = useState({
    state: "hidden",
    id: null,
  });
  const [productsArr, setProductsArr] = useState([]);
  const [formTitle, setFormTitle] = useState("");
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
        <ModalDelete
          showModalDelete={showModalDelete}
          setShowModalDelete={setShowModalDelete}
          getDataTable={getDataTable}
        />
        <ModalEdit
          showModalEdit={showModalEdit}
          setShowModalEdit={setShowModalEdit}
          formTitle={formTitle}
          getDataTable={getDataTable}
          /*editDataTable={editDataTable}*/
        />
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
              onClickEvt={() => {
                setShowModalEdit({ state: "", id: "" });
                setFormTitle("Add product");
              }}
            />
          </div>
          <h1 className="table-title">Products</h1>
          <div className="table-products-list-container">
            <div className="table-products-list">
              <Table
                products={productsArr}
                setShowModalDelete={setShowModalDelete}
                setShowModalEdit={setShowModalEdit}
                setFormTitle={setFormTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default ProductTablePage;
