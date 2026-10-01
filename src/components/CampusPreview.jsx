import './CampusPreview.css'

function CampusPreview() {
  return (
    <div className="campus-preview">
      <div className="campus-header">
        <h3>INTERACTIVE CAMPUS</h3>
        <p>3D Campus Visualization</p>
      </div>
      <div className="campus-placeholder">
        <div className="loading-animation">
          <div className="loading-spinner"></div>
          <p>3D CAMPUS LOADING...</p>
        </div>
      </div>
    </div>
  )
}

export default CampusPreview
