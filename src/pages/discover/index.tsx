import Header from '@/components/header'

import './index.css'

import { SEO } from '@/utilities'
import { Link } from 'react-router-dom'

import Button from '@/components/ui/button'

export default function Discover() {
  SEO({
    title: 'Watch The Dictator | Netflix',
    description:
      'Sacha Baron Cohen stars as a misogynistic tyrant who ends up on the streets of New York, powerless, unrecognizable and working in an organic food co-op. Watch trailers & learn more.'
  })

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
    </div>
  )
}
