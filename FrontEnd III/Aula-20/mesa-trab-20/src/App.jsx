import React, { useEffect, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListComponent from "./components/ListComponent";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "SET_LIST":
      return action.payload;
    default:
      return state;
  }
};

const App = () => {
  const [list, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("list"));
    if (savedList) {
      dispatch({ type: "ADD_ITEM", payload: savedList });
    }
  }, []);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("list"));
    if (savedList) {
      dispatch({ type: "SET_LIST", payload: savedList });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addItem = () => {
    const nameRegex = /^[a-zA-Z]+$/;
    if (inputValue.trim() !== "" && nameRegex.test(inputValue)) {
      const newItem = { id: uuidv4(), name: inputValue };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>List Component</h1>
      <ListComponent list={list} dispatch={dispatch} />
      <div id="input-container">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
};

export default App;
