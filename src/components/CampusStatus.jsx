import { CheckCircle } from 'lucide-react'
import './CampusStatus.css'

function CampusStatus() {
  const statusItems = [
    { label: 'Campus Status', value: 'Operational', icon: true, color: 'success' },
    { label: 'Active Areas', value: '8 / 9', icon: false, color: 'default' },
    { label: 'Open Issues', value: '7', icon: false, color: 'default' },
    { label: 'Last Updated', value: 'Demo Simulation', icon: false, color: 'default' },
  ]

  return (
    <div className="campus-status">
      <div className="status-header">
        <h3>Campus Status</h3>
      </div>
      <div className="status-items">
        {statusItems.map((item, index) => (
          <div key={index} className={`status-item ${item.color}`}>
            <div className="status-label">{item.label}</div>
            <div className="status-value">
              {item.icon && <CheckCircle size={16} />}
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CampusStatus
