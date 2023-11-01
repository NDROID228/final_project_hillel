import React, { useState, useEffect } from "react";
import "./ProductDetails.scss";
import Logo from "../../assets/img/somelogo.png";
import ArrowBack from "../../assets/img/ProductDetails/arrow-back.png";
import Lenovo from "../../assets/img/ProductPreview/lenovo.png";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = (props) => {
  let { productID } = useParams();
  const [detailsObj, setDetailsObj] = useState([]);

  const getDataDetails = async () => {
    let json;

    try {
      const response = await fetch("http://localhost:3001/infoDetails", {
        method: "POST",
        body: JSON.stringify({ ID: productID }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw Error(response.statusText || "Something wrong");
      }

      json = await response.json();
    } catch (err) {
      console.error(err);
    }

    let productsArr = JSON.parse(json);

    setDetailsObj(productsArr[0]);
  };

  useEffect(() => {
    getDataDetails();
  }, []);

  // const textUnpacking = (textObj) => {
  //   let resultArr = [];
  //   for (const key in textObj) {
  //     const paragraphArr = textObj[key];
  //     resultArr.push(
  //     <p className="bold-text"><b>{paragraphArr[0]}</b></p>, 
  //     <p className="regular-text">{paragraphArr[1]}</p>
  //     );
  //   }
  //   return resultArr;
  // };

  let navigate = useNavigate();
  const goBack = () => {
    navigate("/preview")
  }

  return (
    <div className="container">
      <div className="box">
        <img className="logo" src={Logo} />
        <div className="details-header">
          <button className="button-back" onClick={goBack}>
            <img className="button-back-img" src={ArrowBack} />
          </button>
          <h3>{`${detailsObj.category || ""} ${detailsObj.name || ""}`}</h3>
        </div>

        <div className="details-short-description">
          <div className="image-box">
            <img className="image" src={Lenovo} />
          </div>
          <div className="short-text">
            <h2 className="avaliable">
              {`${
                detailsObj.isAvailable ? "Є в наявності" : "Немає в наявності"
              }`}
            </h2>
            <h2 className="price">
              {detailsObj.price}
              <span>$</span>
            </h2>
            <h2>Кількість: {detailsObj.amount}</h2>
          </div>
        </div>

        <div className="details-long-description">
          <h3>
            Опис {`${detailsObj.category || ""} ${detailsObj.name || ""}`}
          </h3>
          {detailsObj.description}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
