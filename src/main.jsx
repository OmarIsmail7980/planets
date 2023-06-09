import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { PlanetContextProvider } from './context/PlanetContext.jsx';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PlanetContextProvider>
      <App />
    </PlanetContextProvider>
  </React.StrictMode>
);
