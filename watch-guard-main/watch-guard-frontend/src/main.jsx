import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NewsContext from './utils/newsContext.jsx'

createRoot(document.getElementById('root')).render(
    <NewsContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </NewsContext>
)

