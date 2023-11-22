import { Link, useParams } from 'react-router-dom'

import './index.css'

import ComingSoon from '@/components/ComingSoon'
import Header from '@/components/header'
import MoreMovies from '@/components/MoreMovies'

import Button from '@/components/ui/button'

export default function Movie() {
  const param = useParams()
  const movieId = param.movieId

  return (
    <div>
      <Header className="bg-black">
        <p>UNLIMITED TV SHOWS & MOVIES</p>

        <Link to={'/discover'}>
          <Button>JOIN NOW</Button>
        </Link>

        <Link to={'/discover'}>
          <Button variant="secondary">SIGN IN</Button>
        </Link>
      </Header>
      <br />
      movie id: {movieId}
<<<<<<< HEAD
      <ComingSoon></ComingSoon>
=======
      <MoreMovies />
>>>>>>> more-movies-section
    </div>
  )
}
