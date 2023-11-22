import { MovieProps } from '@/types/movie'

import './index.css'

type ComingSoonMovies = {
  comingSoon: MovieProps[] | null
}

export default function ComingSoon({ comingSoon }: ComingSoonMovies) {
  console.log(comingSoon)
  return (
    <div className="coming-soon-container">
      <div className="section-head">
        <h2 className="section-head-text">Coming Soon</h2>
      </div>
      <div className="coming-soon-container-details">
        {comingSoon?.map((movie, index) => {
          return (
            <a href="#" className="coming-soon-link" key={index}>
              <div className="coming-soon-title">{movie.title}</div>
              <div className="coming-soon-description">{movie.overview}</div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
