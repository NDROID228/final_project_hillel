import "./ProductTablePage.css";
import Button from "../../components/ButtonInterface/ButtonInterface";
import Table from "../../components/Table/Table";
import Logo from "../../assets/img/somelogo.png";

const ProductTable = (props) => {
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
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
