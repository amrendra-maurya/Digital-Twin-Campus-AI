import { Home, Map, BarChart3, Wrench, MessageCircle } from 'lucide-react'
import './Navigation.css'

function Navigation({ activePage, setActivePage }) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'explorer', label: 'Campus Explorer', icon: Map },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'maintenance', label: 'Maintenance', icon: Wrench },
    { id: 'ai', label: 'Campus AI', icon: MessageCircle },
  ]

  return (
    <nav className="navigation">
      <div className="nav-items">
        {navItems.map((item) => {
          const IconComponent = item.icon
          return (
            <button
              key={item.id}
              className={`nav-item ${activePage === item.id ? 'active' : ''}`}
              onClick={() => setActivePage(item.id)}
              title={item.label}
            >
              <IconComponent size={20} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation
