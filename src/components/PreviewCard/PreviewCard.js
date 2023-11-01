import "./PreviewCard.scss";
import { useNavigate } from "react-router-dom";
import Buy from "../../assets/img/ProductPreview/buy.png";

const PreviewCard = ({ data }) => {
  const navigate = useNavigate();

  const productID = data._id;
  let isReady = "";
  if (data.isAvailable) {
    isReady = "Готовий до відправки";
  } else {
    isReady = "Немає у наявності";
  }

  const redirectToProductDetails = () => {
    navigate(`/preview/${productID}`);
  };

  return (
    <div className="preview-card-container" onClick={redirectToProductDetails}>
      <div className="preview-card-box">
        <div className="preview-card-top">
          <img className="image" src={data.imageSrc} alt={data.name} />
          <div className="title">
            <p>{`${data.category}  ${data.name}`}</p>
          </div>
        </div>
        <div className="preview-card-center">
          <p className="price">
            {data.price}
            <span>$</span>
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
