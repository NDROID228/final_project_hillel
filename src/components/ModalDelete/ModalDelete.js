import "./ModalDelete.scss";
import ButtonModal from "../ButtonModal/ButtonModal";

const ModalDelete = ({ showModalDelete, setShowModalDelete, getDataTable }) => {
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
      setShowModalDelete({ state: "hidden", id: null });
      getDataTable();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`modal ${showModalDelete.state}`}>
      <div className="modal-bg"></div>
      <div className="modal-container">
        <div className={`modal-delete-box`}>
          <div className="modal-delete-text">
            <h1>Are you sure you want to delete this product?</h1>
          </div>
          <div className="modal-delete-buttons">
            <ButtonModal
              title="Cancel"
              color="grey"
              onClickEvt={() => setShowModalDelete({ state: "hidden", id: null })}
            />
            <ButtonModal
              title="Delete"
              color="red"
              onClickEvt={() => deleteOnClick(showModalDelete.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
