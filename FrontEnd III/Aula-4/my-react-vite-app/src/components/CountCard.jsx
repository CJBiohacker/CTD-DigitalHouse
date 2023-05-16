import { useState } from "react";

const CountCard = (props) => {
  const [count, setCount] = useState(0);
  const { countText, addText, removeText, cardText, resetText } = props;

  const addCount = () => setCount((count) => count + 1);
  const removeCount = () => setCount((count) => count - 1);
  const resetCount = () => setCount(0);

  return (
    <>
      <div className="count-card">
        <button>
          {countText} {count}
        </button>
        <button onClick={addCount}>{addText}</button>
        <button onClick={removeCount}>{removeText}</button>
        <button onClick={resetCount}>{resetText}</button>
        <p>{cardText}</p>
      </div>
    </>
  );
};

export default CountCard;
