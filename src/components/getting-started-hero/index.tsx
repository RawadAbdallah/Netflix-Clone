import './index.css'

function index() {
  return (
    <>
      <div className="hero-background">
        <img src="/src/assets/images/getting-started/hero.jpg" alt="" />
        <div className="hero-overlay"></div>
      </div>
      <div className="getting-started-nav">
        <div className="getting-started-nav-logo">
          <img src="/src/assets/images/getting-started/logo.png" alt="logo" />
        </div>
        <div className="getting-started-nav-buttons"></div>
      </div>
      <div className="getting-started-hero">
        <div className="getting-started-content-container">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
        </div>
      </div>
    </>
  )
}

export default index
