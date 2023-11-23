import './index.css'

import Faq from '@/components/faq'
import Footer from '@/components/footer'
import GettingStartedHero from '@/components/getting-started-hero'
import Header from '@/components/header'
import { SEO } from '@/utilities'
import { Link } from 'react-router-dom'

// ui-imports
import Button from '@/components/ui/button'
import LanguageSelector from '@/components/ui/language-selector'
import Section from '@/components/ui/section'

export default function Home() {
  SEO({
    title: 'Netflix Lebanon - Watch TV Shows Online, Watch Movies Online',
    description:
      'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.'
  })

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
        bgVideo="/videos/tv.m4v"
      />

      <Section
        title="Download your shows to watch offline"
        description="Save your favorites easily and always have something to watch."
        imgSrc="/images/getting-started/mobile-0819.jpg"
        isReversed={true}
      />

      <Section
        title="Watch everywhere"
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        imgSrc="/images/getting-started/device-pile.png"
        bgVideo="/videos/video-devices.m4v"
        clasName="custom-video"
      />

      <Section
        title="Create profiles for kids"
        description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        imgSrc="/images/getting-started/kids.png"
        isReversed={true}
      />

      <Faq />

      <Footer />
    </div>
  )
}
