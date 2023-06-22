import React, { useContext } from "react";
import { SupportCallContext } from "../context/SupportCallContext";

const SupportCallCard = ({ call }) => {
  const { dispatch } = useContext(SupportCallContext);

  const handleRemove = () => {
    dispatch({ type: "REMOVE_SUPPORT_CALL", payload: call.id });
  };

  return (
    <div>
      <h3>{call.supportType}</h3>
      <p>Tempo de Resposta: {call.responseTime}</p>
      <button onClick={handleRemove}>Remover Chamado</button>
    </div>
  );
};

export default SupportCallCard;
