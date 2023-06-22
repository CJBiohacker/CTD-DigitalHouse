import React, { createContext, useReducer, useEffect } from "react";

const initialState = [];

export const SupportCallContext = createContext();

const supportCallReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SUPPORT_CALL":
      return [...state, action.payload];
    case "REMOVE_SUPPORT_CALL":
      return state.filter((call) => call.id !== action.payload);
    case "LOAD_SUPPORT_CALLS":
      return action.payload;
    default:
      return state;
  }
};

export const SupportCallProvider = ({ children }) => {
  const [supportCalls, dispatch] = useReducer(supportCallReducer, initialState);

  useEffect(() => {
    const storedSupportCalls = JSON.parse(localStorage.getItem("supportCalls"));
    if (storedSupportCalls) {
      dispatch({ type: "LOAD_SUPPORT_CALLS", payload: storedSupportCalls });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("supportCalls", JSON.stringify(supportCalls));
  }, [supportCalls]);

  return (
    <SupportCallContext.Provider value={{ supportCalls, dispatch }}>
      {children}
    </SupportCallContext.Provider>
  );
};
