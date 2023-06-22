import React from 'react';
import SupportCallForm from './components/SupportCallForm';
import SupportCallList from './components/SupportCallList';
import './styles/App.css';

const App = () => (
  <>
  <div>
    <h1>Suportapp</h1>
    <SupportCallForm />
    <SupportCallList />
  </div>
  <div id='members'>
    <h3>Integrantes</h3>
    <p>Carlos de Lima Junior</p>
    <p>Reogério P. Silva</p>
    <p>Leandro .....</p>
    <p>Não lembro o nome</p>
    <p>Não lembro o nome</p>
  </div>
  </>
);

export default App;
