import Header from '@/components/header'

import './index.css'

import { fetchTMDB } from '@/utilities'
import { Link } from 'react-router-dom'

import Button from '@/components/ui/button'

export default function Discover() {
  const { globalGenres } = fetchTMDB

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
            if (index < 14) {
              return <span>{genre}</span>
            }
          })}
        </section>
      </main>
    </div>
  )
}
