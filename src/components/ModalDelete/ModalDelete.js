import "./ModalDelete.css";
import ButtonModal from "../ButtonModal/ButtonModal";

const ModalDelete = ({ showModal, setShowModal, getDataTable }) => {
  const deleteOnClick = async (frontID) => {
    let result;
    try {
      const body = { frontID: frontID };
      const response = await fetch("http://localhost:3001/deleteRow", {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw Error(response.statusText || "Something wrong");
      }

      result = await response.json();
      //   console.log(result);
      setShowModal({ state: "hidden", id: null });
      getDataTable();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className={`modal-bg ${showModal.state}`}></div>
      <div className={`modal ${showModal.state}`}>
        <div className="modal-text">
          <h1>Are you sure you want to delete this product?</h1>
        </div>
        <div className="modal-buttons">
          <ButtonModal
            title="Cancel"
            color="grey"
            onClickEvt={() => setShowModal({ state: "hidden", id: null })}
          />
          <ButtonModal
            title="Delete"
            color="red"
            onClickEvt={() => deleteOnClick(showModal.id)}
          />
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
