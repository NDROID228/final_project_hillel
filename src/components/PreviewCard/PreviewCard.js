import "./PreviewCard.css";
import lenovo from "../../assets/img/ProductPreview/lenovo.png";
import Buy from "../../assets/img/ProductPreview/buy.png";

const PreviewCard = (props) => {
  return (
    <div className="preview-card-container">
      <div className="preview-card-box">
        <div className="preview-card-top">
          <img className="image" src={lenovo} alt="" />
          <div className="title">
            <p>Ноутбук Lenovo Y50-70 Aluminum Black</p>
          </div>
        </div>
        <div className="preview-card-center">
          <p className="price">
            25000<span>$</span>
          </p>
          <p className="amount">Кількість: 5</p>
        </div>
        <div className="preview-card-bottom">
          <img className="icon" src={Buy} alt="" />
          <p className="text">Готовий до відправки</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
