import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";

const ProductDetails = (props) => {
  const navigate = useNavigate();

  const redirectToProductDetails = () => {
    navigate("/");
  };

  return <div>Choosen product is {props.id}</div>;
};

export default ProductDetails;
