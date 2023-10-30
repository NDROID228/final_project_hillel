import "./ModalEdit.scss";
import { useFormik, Formik } from "formik";
import ButtonModal from "../ButtonModal/ButtonModal";
import InputModalForm from "../../InputModalForm/InputModalForm";

const validate = (values) => {
  const errors = {};
  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      const element = values[key];
      if (!element) {
        errors[key] = "Required";
      } else {
        switch (key) {
          case "price":
          case "quantity":
            if (isNaN(Number(element))) {
              errors[key] = "Must be a number!";
            } else if (Number(element) <= 0) {
              errors[key] = "Must be more than 0!";
            }
            break;
          default:
            break;
        }
      }
    }
  }

  return errors;
};

const ModalEdit = ({
  showModalEdit,
  setShowModalEdit,
  editDataTable,
  formTitle,
}) => {

  const editOnClick = async (frontID) => {
    let result;
    try {
      // const body = { frontID: frontID };
      // const response = await fetch("http://localhost:3001/deleteRow", {
      //   method: "DELETE",
      //   body: JSON.stringify(body),
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // });

      // if (!response.ok) {
      //   throw Error(response.statusText || "Something wrong");
      // }

      // result = await response.json();
      //   console.log(result);
      setShowModalEdit({ state: "hidden", id: null });
      // editDataTable();
    } catch (err) {
      console.error(err);
    }
  };

  const initialValues = {
    category: "",
    name: "",
    quantity: "",
    price: "",
    description: "",
  };

  return (
    <div className={`modal ${showModalEdit.state}`}>
      <div className={`modal-bg ${showModalEdit.state}`}></div>
      <div className="modal-container">
        <div className="modal-edit-box">
          <h1>{formTitle}</h1>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm({ values: "" });
            }}
          >
            {({ handleSubmit, handleChange, resetForm, values, errors }) => (
              <form className="modal-form" onSubmit={handleSubmit}>
                
                <InputModalForm
                  placeholder={"category"}
                  type="text"
                  onChange={handleChange}
                  value={values.category || ""}
                  children={
                    errors.category ? errors.category : null
                  }
                />

                <InputModalForm
                  placeholder={"name"}
                  type="text"
                  onChange={handleChange}
                  value={values.name || ""}
                  children={errors.name ? errors.name : null}
                />

                <InputModalForm
                  placeholder={"quantity"}
                  type="text"
                  onChange={handleChange}
                  value={values.quantity || ""}
                  children={
                    errors.quantity ? errors.quantity : null
                  }
                />

                <InputModalForm
                  placeholder={"price"}
                  type="text"
                  onChange={handleChange}
                  value={values.price || ""}
                  children={errors.price ? errors.price : null}
                />

                <InputModalForm
                  placeholder={"description"}
                  inputClass={"description"}
                  type="text"
                  onChange={handleChange}
                  value={values.description || ""}
                  children={
                    errors.description ? errors.description : null
                  }
                />

                <div className="modal-buttons">
                  <ButtonModal
                    type="button"
                    title="Cancel"
                    color="grey"
                    onClickEvt={() => {
                      setShowModalEdit({ state: "hidden", id: null });
                      resetForm();
                    }}
                  />
                  <ButtonModal
                    type="submit"
                    title="Submit"
                    color="green"
                    // onClickEvt={() => editOnClick(showModalEdit.id)}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
