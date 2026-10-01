import StatCard from '../StatCard'
import CampusPreview from '../CampusPreview'
import CampusStatus from '../CampusStatus'
import './Overview.css'

function Overview() {
  return (
    <div className="overview-page">
      <div className="overview-content">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h2>Welcome to CampusVerse</h2>
          <p>Explore your campus. Understand your campus.</p>
        </section>

        {/* Stats Grid */}
        <section className="stats-grid">
          <StatCard title="Buildings" value="9" unit="" demo={true} />
          <StatCard title="Active Issues" value="7" unit="" demo={true} />
          <StatCard title="Campus Occupancy" value="68" unit="%" demo={true} />
          <StatCard title="Energy Usage" value="74" unit="%" demo={true} />
        </section>

        {/* Main Content Area */}
        <section className="main-area">
          <div className="campus-section">
            <CampusPreview />
          </div>
          <div className="status-section">
            <CampusStatus />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Overview
