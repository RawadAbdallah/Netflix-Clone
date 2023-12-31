import Header from '@/components/header'

import './index.css'

import Footer from '@/components/footer'
import Slider from '@/components/movie-slider'
import { TypeGenres } from '@/types/movie'
import { fetchTMDB, SEO } from '@/utilities'
import { Link } from 'react-router-dom'

import Button from '@/components/ui/button'

export default function Discover() {
  SEO({
    title: 'Watch The Dictator | Netflix',
    description:
      'Sacha Baron Cohen stars as a misogynistic tyrant who ends up on the streets of New York, powerless, unrecognizable and working in an organic food co-op. Watch trailers & learn more.'
  })

  const { globalGenres } = fetchTMDB

  return (
    <div>
      <Header className="bg-black discover-main-header">
        <p>UNLIMITED TV SHOWS & MOVIES</p>

        <Link to={'/discover'}>
          <Button>JOIN NOW</Button>
        </Link>

        <Link to={'/discover'}>
          <Button variant="secondary">SIGN IN</Button>
        </Link>
      </Header>

      <main className="discover-main">
        <section className="discover-main-hero">
          <h1>Movies</h1>
          <p>
            Movies move us like nothing else can, whether they’re scary, funny, dramatic,
            romantic or anywhere in-between. So many titles, so much to experience.
          </p>
        </section>

        <section className="discover-movies-by-genre">
          {globalGenres.map((genre, index) => {
            if (index < 16) {
              return (
                <Slider
                  className={index < 14 ? '' : 'blur-layer'}
                  key={index}
                  genre={genre as TypeGenres}
                  title={genre}
                />
              )
            }
          })}
        </section>

        <section className="discover-main-watch">
          <div className="discover-main-watch-more">
            <h2>There’s even more to watch.</h2>

            <p>
              Netflix has an extensive library of feature films, documentaries, TV shows,
              anime, award-winning Netflix originals, and more. Watch as much as you want,
              anytime you want.
            </p>

            <Button>Join Now</Button>
          </div>
        </section>
      </main>

      <Footer className="discover-main-footer" />
    </div>
  )
}
