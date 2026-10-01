import './StatCard.css'

function StatCard({ title, value, unit, demo = false }) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <h3>{title}</h3>
        {demo && <span className="demo-label">DEMO</span>}
      </div>
      <div className="stat-value">
        {value}<span className="stat-unit">{unit}</span>
      </div>
    </div>
  )
}

export default StatCard
