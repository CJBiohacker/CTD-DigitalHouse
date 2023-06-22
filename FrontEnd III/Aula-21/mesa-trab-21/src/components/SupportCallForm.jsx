import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { SupportCallContext } from "../context/SupportCallContext";

const SupportCallForm = () => {
  const { dispatch } = useContext(SupportCallContext);
  const [supportType, setSupportType] = useState("");
  const [responseTime, setResponseTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSupportCall = {
      id: uuidv4(),
      supportType,
      responseTime,
    };
    dispatch({ type: "ADD_SUPPORT_CALL", payload: newSupportCall });
    setSupportType("");
    setResponseTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tipo de Chamado de Suporte:
        <input
          type="text"
          value={supportType}
          onChange={(e) => setSupportType(e.target.value)}
        />
      </label>
      <br />
      <label>
        Tempo de Resposta:
        <input
          type="text"
          value={responseTime}
          onChange={(e) => setResponseTime(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Adiciona novo chamado</button>
    </form>
  );
};

export default SupportCallForm;
