import { useState } from "react";

const CountCard = (props) => {
  const [count, setCount] = useState(0);
  const { buttonText, cardText, resetText } = props;

  const addCount = () => setCount((count) => count + 1);
  const resetCount = () => setCount(0);

  return (
    <>
      <div className="count-card">
        <button onClick={addCount}>
          {buttonText} {count}
        </button>
        <p>{cardText}</p>
        <button onClick={resetCount}>
          {resetText}
        </button>
      </div>
    </>
  );
};

export default CountCard;
