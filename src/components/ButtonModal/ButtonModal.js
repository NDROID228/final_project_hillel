import "./ButtonModal.css";

const ButtonModal = ({title, color, onClickEvt}) => {
    return(
        <button className={`modal-button ${color}`} onClick={onClickEvt}>
            {title}
        </button>
    )
}

export default ButtonModal;