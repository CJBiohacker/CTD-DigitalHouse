import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentList from "./Components/CommentList";
import "./App.css";

const App = () => {
  const [comments, setComments] = useState([]);

  useEffect(async () => {
    await getComments();
  }, []);

  // Função GET que busca os comentários
  const getComments = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(response.data);
    } catch (error) {
      console.log("Ocorreu o seguinte erro na requisição: ", error);
    }
  };

  // Função POST que envia um novo comentário do formulário
  const submitData = async (event) => {
    event.preventDefault();
    const comment = {
      name: event.target.name.value,
      body: event.target.body.value,
    };
    try {
      await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        comment
      );
      console.log("Comment posted successfully!");
      event.target.reset();
      await getComments();
    } catch (error) {
      console.log("Ocorreu o seguinte erro na requisição: ", error);
    }
  };

  return (
    <div id="main-container">
      <div id="title-container">
        <h1>Requisitor de Comentários</h1>
        <form className="form-container" onSubmit={submitData}>
          <input type="text" name="name" placeholder="Name" required />
          <br />
          <textarea name="body" placeholder="Comment" required></textarea>
          <br />
          <button type="submit">Post Comment</button>
        </form>
      </div>
      <CommentList comments={comments} />
    </div>
  );
};

export default App;
