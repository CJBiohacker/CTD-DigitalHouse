import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountCard from './components/CountCard';

function App() {
  const customText = "Edit <code>src/App.jsx</code> and save to test HMR.";
  const resetText = "Click to reset count."

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
        buttonText={"The current count is "} 
        cardText={customText}
        resetText={resetText}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
