import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import "./styles.css";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("Banco de Dados");
  const [inputValue, setInputValue] = useState("0");
  const [scores, setScores] = useState({
    "Banco de Dados": [],
    "Desenvolvimento Backend": [],
    "Desenvolvimento Frontend": [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedOption && inputValue !== "") {
      setScores((prevScores) => {
        const updatedScores = { ...prevScores };
        if (selectedOption in updatedScores) {
          updatedScores[selectedOption] = [
            ...updatedScores[selectedOption],
            parseFloat(inputValue),
          ];
        } else {
          updatedScores[selectedOption] = [parseFloat(inputValue)];
        }
        return updatedScores;
      });
      setInputValue("");
    }
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const decimalRegex = /^(\d?|10)(\.\d)?$/;

    if (decimalRegex.test(value) || value === "") {
      setInputValue(value);
    }
  };

  const isSaveButtonEnabled =
    selectedOption !== "Devops" &&
    selectedOption !== "" &&
    parseFloat(inputValue) >= 0 &&
    parseFloat(inputValue) <= 10 &&
    (!inputValue.includes(".") ||
      (inputValue.includes(".") && inputValue.split(".")[1].length === 1));

  console.log("App ~ isSaveButtonEnabled ==> ", isSaveButtonEnabled);
  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>
      <Form
        selectedOption={selectedOption}
        inputValue={inputValue}
        handleSelectChange={handleSelectChange}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isSaveButtonEnabled={isSaveButtonEnabled}
      />

      <div className="container">
      <Table scores={scores} />
      </div>
    </div>
  );
};

export default App;
