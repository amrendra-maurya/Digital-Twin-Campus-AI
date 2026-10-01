import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import MainDashboard from './components/MainDashboard'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('overview')

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Navigation activePage={activePage} setActivePage={setActivePage} />
        <MainDashboard activePage={activePage} />
      </div>
    </div>
  )
}

export default App
