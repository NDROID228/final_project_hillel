import "./ProductPreviewPage.css";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/somelogo.png";
import PreviewCard from "../../components/PreviewCard/PreviewCard";

const ProductPreviewPage = () => {
  const data = [{}, {}, {}];
  const [cardsArr, setCard] = useState([]);

  const unpackData = (() => {
    let tempArr = [];
    data.map((data) => {
      tempArr.push(<PreviewCard data={data} />);
    });
    return tempArr;
  })

  useEffect(() => {
    setCard(unpackData());
  }, [])

  return (
    <div className="container">
      <div className="box">
        <img className="logo" src={Logo} />
        <div className="preview-cards-box">
          {cardsArr}
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewPage;
