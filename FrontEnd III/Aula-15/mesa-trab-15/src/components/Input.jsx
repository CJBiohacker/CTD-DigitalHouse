import { useEffect } from "react";

function Input({ title, type, value, placeholder,  fnOnChange, fnOnKeyUp }) {
  useEffect(() => {
    console.log("<Input/> foi Montado");
  }, []);

  return (
    <div>
      <label htmlFor="">{title ?? "indefinido"}</label>
      <br />
      <input
        type={type ?? "text"}
        value={value}
        placeholder={placeholder}
        onChange={fnOnChange}
        onKeyUp={fnOnKeyUp}
      />
    </div>
  );
}

export default Input;
