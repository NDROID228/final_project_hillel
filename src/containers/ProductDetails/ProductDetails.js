import React, { useEffect } from "react";
import "./ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = (props) => {
  let { productID } = useParams();

  return <div>Choosen product is {productID}</div>;
};

export default ProductDetails;
