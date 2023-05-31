import { useState } from "react";
import CardComponent from "./components/Card/CardComponent";
import InputComponent from "./components/Input/InputComponent";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [card, setCard] = useState([]);
  const [titleInputError, setTitleInputError] = useState("");
  const [imgUrlInputError, setimgUrlInputError] = useState("");
  const [disableStatus1, changeDisableStatus1] = useState(true);
  const [disableStatus2, changeDisableStatus2] = useState(true);

  const handleChangeTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
    if (title.length < 3 || /^\s/.test(title)) {
      changeDisableStatus1(true);
      setTitleInputError(
        "O Título deveria ter no mínimo 3 caracteres, sem espaço inicial."
      );
    } else {
      changeDisableStatus1(false);
      setTitleInputError("");
    }
  };

  const handleChangeImgUrl = (event) => {
    event.preventDefault();
    setImgUrl(event.target.value);
    if (imgUrl.length < 6 || !/\d/.test(imgUrl)) {
      changeDisableStatus2(true);
      setimgUrlInputError(
        "A URL da imagem deveria ter no mínimo 6 caracteres com pelo menos 1 número."
      );
    } else {
      changeDisableStatus2(false);
      setimgUrlInputError("");
    }
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    const newCard = {
      title: title,
      imgUrl: imgUrl,
    };
    setCard([...card, newCard]);
    setTitle("");
    setImgUrl("");
    setTitleInputError("");
    setimgUrlInputError("");
  };

  const resetCards = (event) => {
    event.preventDefault();
    setCard([]);
  };

  return (
    <>
      <div id="container">
        <h2>Galeria Endgame</h2>

        <form id="container">
          <InputComponent
            title="Titulo do Anime"
            type="text"
            value={title}
            fnOnChange={handleChangeTitle}
          />
          {titleInputError && <p id="error">{titleInputError}</p>}

          <InputComponent
            title="Img URL"
            type="url"
            value={imgUrl}
            fnOnChange={handleChangeImgUrl}
          />

          {imgUrlInputError && <p id="error">{imgUrlInputError}</p>}

          <div id="button-container">
            <button onClick={resetCards}>Resetar</button>
            <button
              onClick={handleButtonClick}
              disabled={!!disableStatus1 || !!disableStatus2}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
      <section id="card-container">
        {card.map((card, index) => (
          <div className="card-item">
            <CardComponent
              key={index}
              title={card.title}
              imgUrl={card.imgUrl}
            />
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
