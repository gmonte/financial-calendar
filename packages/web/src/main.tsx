import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'
import { StoreProvider } from './store'

import '~/styles/globals.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
)
