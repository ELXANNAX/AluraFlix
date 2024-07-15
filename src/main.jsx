import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import { VideosContextProvider } from './context/VideosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VideosContextProvider>
      <Router>
        <App />
      </Router>
    </VideosContextProvider>
  </React.StrictMode>,
)
