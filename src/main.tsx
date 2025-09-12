import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'virtual:uno.css'
import ToastProvider from './components/toast/provider.tsx'
import { BrowserRouter } from 'react-router-dom'
import Routers from './router/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <Routers />
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
)
