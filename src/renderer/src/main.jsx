import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AuthProvider } from './util/AuthContext'
import './assets/main.css'
import { Provider } from 'react-redux'
import reduxStore from './util/reduxStore'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './util/apis/httpUrl'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={reduxStore}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
)
