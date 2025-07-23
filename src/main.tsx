import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'

import '@/scss/reset.scss'
import '@/scss/global.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
