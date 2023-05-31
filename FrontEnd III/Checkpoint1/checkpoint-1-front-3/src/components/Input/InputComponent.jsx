const InputComponent = (props) => {
  const { title, type, value, fnOnChange } = props;

  return (
    <>
      <label>{title ?? "Indefinido"}</label>
      <br />

      <input type={type ?? "text"} value={value} onChange={fnOnChange} />
      <br />
    </>
  );
};

export default InputComponent;
