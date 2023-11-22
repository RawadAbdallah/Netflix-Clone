import { Link, useParams } from 'react-router-dom'

import './index.css'

import { useEffect, useState } from 'react'
import ComingSoon from '@/components/ComingSoon'
import Header from '@/components/header'
import Hook from '@/components/Hook'
import MoreDetails from '@/components/MoreDetails'
import HeroSection from '@/components/MoreDetailsHeroSection'
import MoreMovies from '@/components/MoreMovies'
import TudumPromo from '@/components/TudumPromo'
import type { MovieDetails } from '@/types/movie'
import { fetchTMDB } from '@/utilities'

import Button from '@/components/ui/button'

export default function Movie() {
  const [movieData, setMovieData] = useState<{ details: MovieDetails | null }>({
    details: null
  })
  const param = useParams()
  const movieId = param.movieId
  async function getData() {
    const { data: detailsRes, error } = await fetchTMDB.getMovieDetails(336843)
    setMovieData({ ...movieData, details: detailsRes })
    console.log(detailsRes)
    console.log(error)
  }
  useEffect(() => {
    getData()
  }, [])
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
      <HeroSection
        backgroundImage={movieData.details?.poster_path}
        title={movieData.details?.title}
        description={movieData.details?.tagline}
      />
      <Hook></Hook>
      <MoreDetails></MoreDetails>
      <MoreMovies></MoreMovies>
      <ComingSoon></ComingSoon>
      <TudumPromo></TudumPromo>
    </div>
  )
}
