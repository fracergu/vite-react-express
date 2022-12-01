import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import expressLogo from './assets/express.svg';
import './App.css';
import React from 'react';

function App() {
  const [count, setCount] = useState(0);

  const [expressMessage, setExpressMessage] = useState(undefined);

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setExpressMessage(data.message);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
          <img src={expressLogo} className="logo express" alt="Express logo" />
        </a>
      </div>
      <h1>Vite + React + Express</h1>
      <div className="card">
        {expressMessage && <p>{expressMessage} from Express!</p>}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite, React and Express logos to learn more
      </p>
    </div>
  );
}

export default App;
