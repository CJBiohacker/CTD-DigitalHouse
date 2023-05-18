const ProductCard = (props) => {
  const { name, image, price } = props;

  return (
    <>
      <li>
        <h2>{name}</h2>
        <img src={image} />
        <h3>{price}</h3>
      </li>
    </>
  );
};

export default ProductCard;
