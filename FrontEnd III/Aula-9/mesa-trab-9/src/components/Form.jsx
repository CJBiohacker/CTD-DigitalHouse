const Form = ({
  selectedOption,
  inputValue,
  handleSelectChange,
  handleInputChange,
  handleSubmit,
  isSaveButtonEnabled,
}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="container_input">
        <select value={selectedOption} onChange={handleSelectChange}>
          <option selected disabled>
            Selecione uma disciplina
          </option>
          <option value="Banco de Dados">Banco de Dados</option>
          <option value="Desenvolvimento Backend">
            Desenvolvimento Backend
          </option>
          <option value="Desenvolvimento Frontend">
            Desenvolvimento Frontend
          </option>
          <option value="Devops">Devops</option>
        </select>
        <input
          type="number"
          step="0.1"
          min="0"
          max="10"
          value={inputValue}
          onChange={handleInputChange}
          disabled={selectedOption === ""}
        />
      </div>
      <input type="submit" value="Salvar" disabled={!isSaveButtonEnabled} />
    </form>
  );
};

export default Form;
