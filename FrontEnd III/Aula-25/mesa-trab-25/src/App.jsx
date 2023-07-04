import React from 'react'
import Dog from './Dog'
import { ToastContainer } from 'react-toastify';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">

      {/* DICA: Utilizar o ErrorBoundary como elemento pai dos demais componentes */}
        {/* Caso de sucesso na API */}
        <Dog breed={"husky"} /> 
        {/* Caso de erro na API */}
        {/* DESCOMENTE ABAIXO E COMENTE EM CIMA PRA TESTAR O CASO DO ERROR BOUNDARY */}
        {/* <Dog breed={"ruffles"} /> */}
        <ToastContainer position="top-right" />
      {/* DICA: Veja a lista completa de raças da API: https://dog.ceo/dog-api/breeds-list */}
    </div>
  )
}

export default App;