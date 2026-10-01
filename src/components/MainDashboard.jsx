import Overview from './pages/Overview'
import './MainDashboard.css'

function MainDashboard({ activePage }) {
  return (
    <main className="main-content">
      {activePage === 'overview' && <Overview />}
      {activePage === 'explorer' && <div className="placeholder">Campus Explorer (Coming Soon)</div>}
      {activePage === 'analytics' && <div className="placeholder">Analytics (Coming Soon)</div>}
      {activePage === 'maintenance' && <div className="placeholder">Maintenance (Coming Soon)</div>}
      {activePage === 'ai' && <div className="placeholder">Campus AI (Coming Soon)</div>}
    </main>
  )
}

export default MainDashboard
