import { Link, useParams } from 'react-router-dom'

import './index.css'

import { useEffect, useState } from 'react'
import ComingSoon from '@/components/ComingSoon'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hook from '@/components/Hook'
import MoreDetails from '@/components/MoreDetails'
import HeroSection from '@/components/MoreDetailsHeroSection'
import MoreMovies from '@/components/MoreMovies'
import TudumPromo from '@/components/TudumPromo'
import type { MovieDetails, MovieProps } from '@/types/movie'
import { fetchTMDB } from '@/utilities'

import Button from '@/components/ui/button'

export default function Movie() {
  const [movieData, setMovieData] = useState<{
    details: MovieDetails | null
    similar: MovieProps[] | null
    comingSoon: MovieProps[] | null
  }>({
    details: null,
    similar: null,
    comingSoon: null
  })

  const param = useParams()

  const movieId = parseInt(param.movieId as string)

  async function getData(id: number) {
    const { data: detailsRes } = await fetchTMDB.getMovieDetails(id)
    setMovieData({ ...movieData, details: detailsRes })

    const { data: similiarMoviesRes } = await fetchTMDB.getSimilarMovies(id)
    setMovieData({ ...movieData, similar: similiarMoviesRes })

    const { data: comingSoonMovies } = await fetchTMDB.getUpcomingMovies()
    setMovieData({ ...movieData, comingSoon: comingSoonMovies.results })
  }

  useEffect(() => {
    getData(movieId)
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
        backgroundImage={movieData.details?.backdrop_path}
        title={movieData.details?.title}
        description={movieData.details?.tagline}
      />
      <Hook tagLine={movieData.details?.tagline} />
      <MoreDetails />
      <MoreMovies movieId={movieId} />
      <ComingSoon comingSoon={movieData.comingSoon} />
      <Footer className={''} />
    </div>
  )
}
