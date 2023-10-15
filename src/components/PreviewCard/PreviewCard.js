import "./PreviewCard.css";
import Buy from "../../assets/img/ProductPreview/buy.png";

const PreviewCard = ({data}) => {
  let isReady = "";
  if (data.isReady) {
    isReady = "Готовий до відправки";
  } else {
    isReady = "Немає у наявності";
  }
  return (
    <div className="preview-card-container">
      <div className="preview-card-box">
        <div className="preview-card-top">
          <img className="image" src={data.imageSrc} alt={data.title} />
          <div className="title">
            <p>{data.title}</p>
          </div>
        </div>
        <div className="preview-card-center">
          <p className="price">
            {data.price}<span>$</span>
          </p>
          <p className="amount">Кількість: {data.amount}</p>
        </div>
        <div className="preview-card-bottom">
          <img className="icon" src={Buy} alt="" />
          <p className="text">{isReady}</p>
        </div>
      </div>
    </div>
  );
};
 
export default PreviewCard;
