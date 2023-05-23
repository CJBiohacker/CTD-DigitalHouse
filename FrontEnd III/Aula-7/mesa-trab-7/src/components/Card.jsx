const Card = (props) => {
  const { biome, image, creatures, boss } = props;

  return (
    <>
      <li style={{listStyle:"none"}}>
        <h2>{biome}</h2>
        <img src={image} style={{width: 400, height: 180}}/>
        <div>
          <h3>Criaturas</h3>
          <p>{creatures.join(', ')}</p>
        </div>
        <div>
          <h3>Boss</h3>
          <p>{boss}</p>
        </div>
      </li>
    </>
  );
};

export default Card;
