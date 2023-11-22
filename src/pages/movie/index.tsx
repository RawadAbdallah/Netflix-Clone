import { Link, useParams } from 'react-router-dom'

import './index.css'

import ComingSoon from '@/components/ComingSoon'
import Header from '@/components/header'
import Hook from '@/components/Hook'
import MoreDetails from '@/components/MoreDetails'
import HeroSection from '@/components/MoreDetailsHeroSection'
import MoreMovies from '@/components/MoreMovies'
import TudumPromo from '@/components/TudumPromo'

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
      <HeroSection></HeroSection>
      <Hook></Hook>
      <MoreDetails></MoreDetails>
      <MoreMovies></MoreMovies>
      <ComingSoon></ComingSoon>
      <TudumPromo></TudumPromo>
    </div>
  )
}
