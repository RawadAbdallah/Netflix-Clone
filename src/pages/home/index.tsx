import Header from '@/components/header'

import './index.css'

import { Link } from 'react-router-dom'

import Button from '@/components/ui/button'
import LanguageSelector from '@/components/ui/language-selector'

export default function Home() {
  return (
    <div>
      <Header className="max-w">
        <LanguageSelector />

        <Link to={'/discover'}>
          <Button>Sign in</Button>
        </Link>
      </Header>
    </div>
  )
}
