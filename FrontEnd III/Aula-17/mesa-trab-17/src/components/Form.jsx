import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const inputChangeFn = (e) => {
    setInputValue(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // Perform the submit action with the input value
    console.log('Submitted value:', inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={inputValue}
        onChange={inputChangeFn}
        placeholder="Digite um valor"
      />
      <button id="submit-button" type="submit">Enviar</button>
    </form>
  );
};

export default Form;