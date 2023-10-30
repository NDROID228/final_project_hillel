import "./InputModalForm.scss";

const InputModalForm = ({placeholder, inputClass, type, onChange, value, children}) => {
  const firstUpperCase = (string) => {
    let tmpArr = string.split('');
    tmpArr[0] = tmpArr[0].toUpperCase();
    return tmpArr.join('');
  }

  return (
    <div className="modal-input">
      <input
      className={inputClass}
      id={placeholder} 
      name={placeholder}  
      type={type}
      placeholder={firstUpperCase(placeholder)}
      onChange={onChange}
      value={value}
      />
      <div className="modal-warning">
        {children}
      </div>
      
    </div>
  );
};

export default InputModalForm;
