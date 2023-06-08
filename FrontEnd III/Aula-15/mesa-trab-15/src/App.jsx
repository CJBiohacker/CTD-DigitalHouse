import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

import ProductList from "./components/ProductList.jsx";
import Input from "./components/Input";

function App() {
  /// Estados da Lista de produtos
  const [products, setProducts] = useState([]);
  const [productsIsLoading, setProductsIsLoading] = useState(false);

  /// Estados do Formulário
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const [productId, setProductId] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    console.log("<App /> Foi Montado");
    getProducts();
  }, []);

  /* REQUISITO: Utilizando o projeto disponibilizado, 
  você deverá criar uma requisição que é executada logo na montagem dos componentes 
  para buscar todos os produtos, cadastrados no servidor e mostrá-los, 
  através de uma lista, em um componente do sistema. */
  async function getProducts() {
    setProductsIsLoading(true);

    try {
      const response = await axios.get("api/products");
      const products = response.data.products;

      setProductsIsLoading(false);

      if (products.length > 0) {
        setProducts(products);
      }
    } catch (error) {
      setProductsIsLoading(false);
      alert(
        `Ocorreu algum erro ao buscar a lista de produtos - Erro: ${error}`
      );
    }
  }

  const formValidator = () => {
    if (title && description && price && stock && category && image) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  };

  const validateProductId = (value) => {
    const hasNumericValue = /^\d+$/.test(value); // Permite apenas valores numéricos
    setIsUpdating(hasNumericValue);
  };

  const createProduct = async (event) => {
    event.preventDefault();
    console.log("clicou no botão de cadastar");

    const product = {
      title: title,
      description: description,
      price: price,
      stock: stock,
      category: category,
      image: image,
    };

    console.log(product);

    try {
      /// Comunicação com a API
      const response = await axios.post("api/products", product);
      console.log(response);
      /// Atualizando as informações da tela, com o novo objeto (produto) cadastrado.
      return getProducts();
    } catch (error) {
      alert(`Ocorreu algum erro ao cadastrar o produto - Erro: ${error}`);
    }
  };

  const updateProduct = async (event) => {
    event.preventDefault();
    console.log("Clicou no botão de atualizar");

    const product = {
      id: productId,
      title: title,
      description: description,
      price: price,
      stock: stock,
      category: category,
      image: image,
    };

    console.log(product);

    try {
      /// Atualizando o produto baseado no ID enviado.
      const response = await axios.put(`api/products/${productId}`, product);
      console.log(response);
      return getProducts();
    } catch (error) {
      alert(`Ocorreu algum erro ao atualizar o produto - Erro: ${error}`);
    }
  };

  return (
    <>
      <h2>Cadastre seu produto</h2>

      <form>
        <Input
          title="Título"
          type="text"
          value={title}
          fnOnChange={(e) => setTitle(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Descrição"
          type="text"
          value={description}
          fnOnChange={(e) => setDescription(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Preço"
          type="text"
          value={price}
          fnOnChange={(e) => setPrice(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Estoque"
          type="text"
          value={stock}
          fnOnChange={(e) => setStock(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="Categoria"
          type="text"
          value={category}
          fnOnChange={(e) => setCategory(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="IMG Url"
          type="text"
          value={image}
          fnOnChange={(e) => setImage(e.target.value)}
          fnOnKeyUp={formValidator}
        />

        <br />

        <Input
          title="ID do Produto"
          type="number"
          placeholder="Digite um Id para atualizar"
          value={productId}
          fnOnChange={(e) => {
            setProductId(e.target.value);
            validateProductId(e.target.value);
          }}
          fnOnKeyUp={formValidator}
        />

        <br />

        <button
          disabled={!formIsValid}
          onClick={isUpdating ? updateProduct : createProduct}
        >
          {isUpdating ? "Atualizar" : "Cadastrar"}
        </button>
      </form>

      {/* Lista de produtos */}
      <h2>Lista de produtos</h2>

      <ProductList
        productList={products}
        productsIsLoading={productsIsLoading}
      />
    </>
  );
}

export default App;
