import { useState } from "react";
import valheimBiomes from "../constant/biomes";
import Card from "./Card";

const List = () => {
  const [cards, setCards] = useState([]);

  const addNewBiome = () => {
    const newCardId = cards.length + 1;
    const newCard = valheimBiomes.find((biome) => biome.id === newCardId);

    if (newCard) {
      setCards([...cards, newCard]);
    }
  };

  const resetBiomes = () => {
    setCards([]);
  };

  return (
    <div>
      <button onClick={addNewBiome}>Adicionar bioma</button>
      <button onClick={resetBiomes}>Apagar todos</button>
      {cards.map((card) => (
        <Card
          key={card.id}
          biomeName={card.biomeName}
          image={card.image}
          creatures={card.creatures}
          boss={card.boss}
        />
      ))}
    </div>
  );
};

export default List;
