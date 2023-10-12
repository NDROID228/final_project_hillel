import "./ProductPreviewPage.css";
import Logo from "../../assets/img/somelogo.png";
import PreviewCard from "../../components/PreviewCard/PreviewCard";

const ProductPreviewPage = () => {
  return (
    <div className="container">
      <div className="box">
        <img className="logo" src={Logo} />
        <div className="preview-cards-box">
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewPage;
