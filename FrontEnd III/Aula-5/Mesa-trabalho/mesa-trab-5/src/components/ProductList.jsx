import produtos from "../const/products";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const productMapping = produtos.map((prod) => {
    return (
      <ProductCard name={prod.nome} image={prod.image} price={prod.preco} />
    );
  });

  return (
    <>
      <h1>Produtos</h1>
      <ul>{productMapping}</ul>
    </>
  );
};

export default ProductList;
