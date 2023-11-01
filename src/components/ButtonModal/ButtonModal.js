import "./ButtonModal.scss";

const ButtonModal = ({ title, color, onClickEvt, type }) => {
  return (
    <button
      className={`modal-button ${color}`}
      onClick={onClickEvt}
      type={type}
    >
      {title}
    </button>
  );
};

export default ButtonModal;
