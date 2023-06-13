import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/home">Lista de Cervejas</Link>
      <Link to="/contact">Contato</Link>
    </nav>
  );
};

export default Navbar;
