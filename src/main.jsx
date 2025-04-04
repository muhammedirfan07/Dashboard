import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'  // Note: Fixed import from 'react-router' to 'react-router-dom'
import { ActiveItemProvider } from './context/ActiveItemContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActiveItemProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ActiveItemProvider>
  </StrictMode>
)