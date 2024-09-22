import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './Context/AuthContext.jsx';
import CartContextProvider, { CartContext } from './Context/CartContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <CartContextProvider>

      <App />

      </CartContextProvider>
     

     
    </AuthContextProvider>
  </StrictMode>
)
