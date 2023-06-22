import React, { useContext } from "react";
import { SupportCallContext } from "../context/SupportCallContext";
import SupportCallCard from "./SupportCallCard";

const SupportCallList = () => {
  const { supportCalls } = useContext(SupportCallContext);

  return (
    <div>
      <h2>Chamados de Suporte:</h2>
      {supportCalls.map((call) => (
        <SupportCallCard key={call.id} call={call} />
      ))}
    </div>
  );
};

export default SupportCallList;
