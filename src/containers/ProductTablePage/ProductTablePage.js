import "./ProductTablePage.css";
import Button from "../../components/ButtonInterface/ButtonInterface";
import Table from "../../components/Table/Table";
import Logo from "../../assets/img/somelogo.png";

const ProductTable = (props) => {
  const products = [
    {
      id: 1,
      category: "PC",
      name: "Lenovo Y50-70",
      quantity: 5,
      price: 25000.0
    },
    {
      id: 2,
      category: "Clothes",
      name: "Nike M Nk Df Acd21",
      quantity: 22,
      price: 4000.0
    },
    {
      id: 3,
      category: "Plumbing",
      name: "CERSANIT MITO 17",
      quantity: 1337,
      price: 5000.0
    }
  ];

  return (
    <div className="table-container">
      <div className="table-box">
        <img className="table-logo" src={Logo} />
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
            <Table products={ products } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
