import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Content from './content.tsx'
import Inscription from './inscription.tsx'
import Connexion from './connexion.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Inscription />
    <Connexion />
    <Content />
    
  </StrictMode>,
)
