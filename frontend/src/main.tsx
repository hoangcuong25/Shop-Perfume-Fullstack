import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppContextProvider from './context/Context.tsx'
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AppContextProvider>
        <App />
        <ToastContainer autoClose={1000} />
      </AppContextProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
