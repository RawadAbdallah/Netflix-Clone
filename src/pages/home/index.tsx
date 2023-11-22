import Header from '@/components/header'

import './index.css'

import GettingStartedHero from '@/components/getting-started-hero'
import { Link } from 'react-router-dom'

import Button from '@/components/ui/button'
import LanguageSelector from '@/components/ui/language-selector'

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
    </div>
  )
}
