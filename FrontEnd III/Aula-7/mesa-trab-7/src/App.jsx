import { useState } from 'react';
import List from './components/List';
import './App.css';


function App() {
  const [cards, setCards] = useState([]);

  return (
    <>
      <h1>Lista de Biomas do Valheim</h1>
      <List />
    </>
  );
}

export default App
