import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { ScrollToTop } from './components/ScrollToTop'
import { ComingSoonProvider } from './context/ComingSoonContext'
import { LandingPage } from './LandingPage'
import { Terms } from './pages/Terms'
import { Privacy } from './pages/Privacy'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ComingSoonProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </ComingSoonProvider>
    </BrowserRouter>
  </StrictMode>,
)
