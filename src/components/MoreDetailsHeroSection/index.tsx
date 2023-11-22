import './index.css'

import Button from '../ui/button'

const HeroSection = () => {
  return (
    <div className="hero-section-container full-width">
      <div className="movie-section flex column">
        <div className="movie-logo-container">
          <img
            className="movie-logo"
            src="https://occ-0-3437-2705.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdTGc5oGPgVmBYiTHarN0q-AuiB5ZhgH2yGnBdj731l_8gyiku9ry7cYG-t3IcsIYObv8mefLJS1jB-EPAng_4lOop78gtXg38lO59aAkRNL.png?r=c7c"
            alt="movie logo"
          />
        </div>
        <div className="movie-details flex column">
          <h1 className="movie-title">Scarface</h1>
          <div className="movie-info flex row">
            <span className="movie-info-item">1983</span>
            <span className="movie-info-spacer">|</span>
            <span className="movie-info-item maturity-rating">18+</span>
            <span className="movie-info-spacer">|</span>
            <span className="movie-info-item">2h 49m</span>
            <span className="movie-info-spacer">|</span>
            <span className="movie-info-item">Thrillers</span>
          </div>
          <div className="movie-description">
            In a ruthless rise to Miami drug lord, a Cuban-born gangster descends into
            addiction, obsession and brutality, with grisly consequences.
          </div>
          <div className="movie-cast">
            <span>Starring: </span>Al Pacino, Steven Bauer, Michelle Pfeiffer
          </div>
        </div>
      </div>
      <div className="join-now-container flex row">
        <img
          className="netflix-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg"
          alt="netflix logo"
        />
        <div className="value-prop-wrapper flex row">
          <div className="value-prop-text">Watch all you want.</div>
          <Button className="join-now-btn">JOIN NOW</Button>
        </div>
      </div>
    </div>
  )
}
export default HeroSection
