import './css/ProgerssBar.css'

const SkillProgressBar = () => {
  return (
    <>
        <div className="set-size charts-container">

  <div className="pie-wrapper progress-99 style-2">
    <span className="label"> Html 99 <span className="smaller">%</span></span>
    <div className="pie">
      <div className="left-side half-circle"></div>
      <div className="right-side half-circle"></div>
    </div>
    <div className="shadow"></div>
  </div>

  <div className="pie-wrapper progress-75 style-2">
    <span className="label">Express<span className="smaller"></span></span>
    <div className="pie">
      <div className="left-side half-circle"></div>
      <div className="right-side half-circle"></div>
    </div>
    <div className="shadow"></div>
  </div>
  <div className="pie-wrapper progress-75 style-2">
    <span className="label">MongoDb<span className="smaller"></span></span>
    <div className="pie">
      <div className="left-side half-circle"></div>
      <div className="right-side half-circle"></div>
    </div>
    <div className="shadow"></div>
  </div>

  <div className="pie-wrapper progress-95 style-2">
    <span className="label">React 95<span className="smaller">%</span></span>
    <div className="pie">
      <div className="left-side half-circle"></div>
      <div className="right-side half-circle"></div>
    </div>
    <div className="shadow"></div>
  </div>

  <div className="pie-wrapper progress-95 style-2">
    <span className="label">Next 95<span className="smaller">%</span></span>
    <div className="pie">
      <div className="left-side half-circle"></div>
      <div className="right-side half-circle"></div>
    </div>
    <div className="shadow"></div>
  </div>

  <div className="pie-wrapper progress-60 style-2">
    <span className="label">Node 60<span className="smaller">%</span></span>
    <div className="pie">
      <div className="left-side half-circle"></div>
      <div className="right-side half-circle"></div>
    </div>
    <div className="shadow"></div>
  </div>
  
  <div className="pie-wrapper progress-95 style-2">
    <span className="label"> css 95<span className="smaller">%</span></span>
    <div className="pie">
      <div className="left-side half-circle"></div>
      <div className="right-side half-circle"></div>
    </div>
    <div className="shadow"></div>
  </div>

  <div className="pie-wrapper progress-95 style-2">
    <span className="label"> scss 95<span className="smaller">%</span></span>
    <div className="pie">
      <div className="left-side half-circle"></div>
      <div className="right-side half-circle"></div>
    </div>
    <div className="shadow"></div>
  </div>
</div>

<div className="skill-other">
  <div>
    <h1>
    Other Skills Include
    </h1>

    <ol>
      <li>Wordpress </li>
      <li>Godaddy website Builder </li>
      <li>Redux</li>
      <li>Material UI </li>
      <li>BootStrap</li>
      <li>Wix</li>
      <li>And many Others.</li>
    </ol>
  </div>
</div>
    </>
  )
}

export default SkillProgressBar