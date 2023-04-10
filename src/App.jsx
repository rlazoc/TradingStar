import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import { StockOverviewPage } from './pages/StockOverviewPage'
import { StockDetailPage } from './pages/StockDetailPage'
import { WatchListContextProvider } from './context/watchListContext'

function App() {
  return (
    <main className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage />} />
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  )
}

export default App
