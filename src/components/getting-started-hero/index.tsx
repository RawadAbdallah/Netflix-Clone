import './index.css'

import EmailInput from '@/components/ui/email-input'

const index = () => {
  return (
    <>
      <div className="getting-started-container">
        <div className="hero-background">
          <img src="/images/getting-started/hero.jpg" alt="hero" />
          <div className="hero-overlay"></div>
        </div>
        <div className="getting-started-hero">
          <div className="getting-started-content-container">
            <h1 className="getting-started-content-title">
              Unlimited movies, TV shows, and more
            </h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <EmailInput />
          </div>
        </div>
      </div>
    </>
  )
}

export default index
