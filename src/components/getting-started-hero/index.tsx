import './index.css'

function index() {
  return (
    <>
      <div className="getting-started-container">
        <div className="hero-background">
          <img src="/src/assets/images/getting-started/hero.jpg" alt="hero" />
          <div className="hero-overlay"></div>
        </div>
        <div className="getting-started-nav">
          <div className="getting-started-nav-logo">
            <img src="/src/assets/images/getting-started/logo.png" alt="logo" />
          </div>
          <div className="getting-started-nav-buttons">
            <></>
          </div>
        </div>
        <div className="getting-started-hero">
          <div className="getting-started-content-container">
            <h1>Unlimited movies, TV shows, and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default index
