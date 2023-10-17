import "./ProductPreviewPage.css";
// import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/somelogo.png";
import imgLenovo from "../../assets/img/ProductPreview/lenovo.png";
import PreviewCard from "../../components/PreviewCard/PreviewCard";

const ProductPreviewPage = () => {
  const data = [{
    frontID: 1,
    title: "Lenovo Laptop H380",
    imageSrc: imgLenovo,
    price: 800,
    amount: 5,
    isReady: true
  }, 
  {
    frontID: 2,
    title: "Lenovo Laptop G300",
    imageSrc: imgLenovo,
    price: 700,
    amount: 0,
    isReady: false
  },];

  return (
    <div className="container">
      <div className="box">
        <img className="logo" src={Logo} />
        <div className="preview-cards-box">
          {
            data.map((data) => {
              return (<PreviewCard data={data} />);
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewPage;
