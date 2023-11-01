import "./ProductPreviewPage.scss";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/somelogo.png";
import imgLenovo from "../../assets/img/ProductPreview/lenovo.png";
import PreviewCard from "../../components/PreviewCard/PreviewCard";

const ProductPreviewPage = () => {
  const [cardsArr, setCardsArr] = useState([]);

  const getDataCards = async () => {
    let json;

    try {
      const response = await fetch("http://localhost:3001/infoCards");

      if (!response.ok) {
        throw Error(response.statusText || "Something wrong");
      }

      json = await response.json();
    } catch (err) {
      console.error(err);
    }

    let cardsArr = JSON.parse(json);

    setCardsArr(cardsArr);
  };

  useEffect(() => {
    getDataCards();
  }, []);

  return (
    <div className="container">
      <div className="box">
        <img className="logo" src={Logo} />
        <div className="preview-cards-box">
          {cardsArr.map((data) => {
            return <PreviewCard data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewPage;
