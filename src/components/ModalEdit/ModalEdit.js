import "./ModalEdit.scss";
import { useEffect, useState } from "react";
import ButtonModal from "../ButtonModal/ButtonModal";
import InputModalForm from "../../InputModalForm/InputModalForm";

const ModalEdit = ({
  showModalEdit,
  setShowModalEdit,
  formTitle,
  getDataTable,
}) => {
  const patchProduct = async (dataObject) => {
    let result;
    try {
      const body = { dataObject: dataObject };
      const response = await fetch("http://localhost:3001/updateRow", {
        method: "PATCH",
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
      // console.log(result);
      resetForm();
      setShowModalEdit({ state: "hidden", id: null });
      getDataTable();
    } catch (err) {
      console.error(err);
    }
  };

  const addProduct = async (dataObject) => {
    let result;
    try {
      const body = { dataObject: dataObject };
      const response = await fetch("http://localhost:3001/addRow", {
        method: "PUT",
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
      // console.log(result);
      resetForm();
      setShowModalEdit({ state: "hidden", id: null });
      getDataTable();
    } catch (err) {
      console.error(err);
    }
  };

  const [initialValues, setInitialValues] = useState({
    category: "",
    name: "",
    quantity: "",
    price: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    category: "",
    name: "",
    quantity: "",
    price: "",
    description: "",
  });

  const handleChange = (event) => {
    const type = event.target.name;
    const value = event.target.value;
    validation(type, value);
    setInitialValues({
      ...initialValues,
      [type]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = isValidToSubmit();
    if (!isValid) {
      return;
    }
    const newDataObject = initialValues;
    if (formTitle === "Edit product") {
      patchProduct(newDataObject);
    } else {
      addProduct(newDataObject);
    }
  };

  const setEditFormValues = (dataObject) => {
    setInitialValues({
      _id: dataObject._id,
      category: dataObject.category,
      name: dataObject.name,
      quantity: dataObject.quantity,
      price: dataObject.price,
      description: dataObject.description,
    });
  };

  const resetForm = () => {
    setInitialValues({
      ...initialValues,
      category: "",
      name: "",
      quantity: "",
      price: "",
      description: "",
    });
    setErrors({
      ...errors,
      category: "",
      name: "",
      quantity: "",
      price: "",
      description: "",
    });
  };

  const validation = (type, value) => {
    if (!value) {
      setErrors({
        ...errors,
        [type]: "Required",
      });
      return;
    } else {
      switch (type) {
        case "price":
        case "quantity":
          if (isNaN(Number(value))) {
            setErrors({
              ...errors,
              [type]: "Must be a number!",
            });
            return;
          } else if (Number(value) <= 0) {
            setErrors({
              ...errors,
              [type]: "Must be more than 0!",
            });
            return;
          }
        default:
          setErrors({
            ...errors,
            [type]: "",
          });
          return;
      }
    }
  };

  const isValidToSubmit = () => {
    let isValid = true;
    for (const key in initialValues) {
      if (Object.hasOwnProperty.call(initialValues, key)) {
        if (initialValues[key] === "") {
          isValid = false;
        }
      }
    }
    for (const key in errors) {
      if (Object.hasOwnProperty.call(errors, key)) {
        if (errors[key] !== "") {
          isValid = false;
        }
      }
    }
    return isValid;
  };

  useEffect(() => {
    const dataObject = showModalEdit.id;
    if (dataObject !== null) {
      if (formTitle === "Edit product") {
        setEditFormValues(dataObject);
      }
    }
  }, [showModalEdit]);

  return (
    <div className={`modal ${showModalEdit.state}`}>
      <div className={`modal-bg ${showModalEdit.state}`}></div>
      <div className="modal-container">
        <div className="modal-edit-box">
          <h1>{formTitle}</h1>
          <form className="modal-form" onSubmit={handleSubmit}>
            <InputModalForm
              placeholder={"category"}
              type="text"
              onChange={handleChange}
              value={initialValues.category}
              children={errors.category ? errors.category : null}
            />

            <InputModalForm
              placeholder={"name"}
              type="text"
              onChange={handleChange}
              value={initialValues.name}
              children={errors.name ? errors.name : null}
            />

            <InputModalForm
              placeholder={"quantity"}
              type="text"
              onChange={handleChange}
              value={initialValues.quantity}
              children={errors.quantity ? errors.quantity : null}
            />

            <InputModalForm
              placeholder={"price"}
              type="text"
              onChange={handleChange}
              value={initialValues.price}
              children={errors.price ? errors.price : null}
            />

            <InputModalForm
              placeholder={"description"}
              inputClass={"description"}
              type="text"
              onChange={handleChange}
              value={initialValues.description}
              children={errors.description ? errors.description : null}
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
              <ButtonModal type="submit" title="Submit" color="green" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
