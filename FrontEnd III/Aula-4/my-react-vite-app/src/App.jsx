import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountCard from './components/CountCard';

function App() {
  const countText = "The current count is ";
  const addText= "Click to add count by 1.";
  const removeText = "Click to reduce count by 1.";
  const resetText = "Click to reset count to 0.";
  const customText = "Edit <code>src/App.jsx</code> and save to test HMR.";

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <CountCard 
        countText={countText}
        addText={addText}
        removeText={removeText} 
        resetText={resetText}
        cardText={customText}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
