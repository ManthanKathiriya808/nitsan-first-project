import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ThemeContextProvider from './ThemeContext/ThemeContextProvider.jsx'
import LanguageContentProvider from './ThemeContext/LanguageContextProvider.jsx'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <QueryClientProvider client={queryClient}> 
      <LanguageContentProvider>

    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
      </LanguageContentProvider>
    </QueryClientProvider>
  </StrictMode>,
)
