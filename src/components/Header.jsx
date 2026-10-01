import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-brand">
          <div className="logo-icon">◆</div>
          <div>
            <h1>CAMPUSVERSE</h1>
            <p>Interactive Digital Twin Campus</p>
          </div>
        </div>
        <div className="header-badge">
          <span className="demo-badge">DEMO MODE</span>
        </div>
      </div>
    </header>
  )
}

export default Header
