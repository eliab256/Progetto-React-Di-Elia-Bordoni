import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '../src/store'
import App from './App'
import './assets/styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode >
  <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
