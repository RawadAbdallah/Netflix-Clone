import './index.css'

import Faq from '@/components/faq'
import Footer from '@/components/footer'
import GettingStartedHero from '@/components/getting-started-hero'
import Header from '@/components/header'
import { Link } from 'react-router-dom'

// ui-imports
import Button from '@/components/ui/button'
import LanguageSelector from '@/components/ui/language-selector'
import Section from '@/components/ui/section'

export default function Home() {
  return (
    <div className="home">
      <Header>
        <LanguageSelector />

        <Link to={'/discover'}>
          <Button>Sign in</Button>
        </Link>
      </Header>

      <GettingStartedHero />

      <Section
        title="Enjoy on your TV"
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        imgSrc="/images/getting-started/tv.png"
        isReversed={false}
      />
      <Section
        title="Enjoy on your TV"
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        imgSrc="/images/getting-started/mobile-0819.jpg"
        isReversed={true}
      />
      <Section
        title="Enjoy on your TV"
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        imgSrc="/images/getting-started/device-pile.png"
        isReversed={false}
      />

      <Faq />

      <Footer />
    </div>
  )
}
