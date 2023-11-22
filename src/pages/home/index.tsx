import Header from '@/components/header'

import './index.css'

import { SEO } from '@/utilities'
import { Link } from 'react-router-dom'

import Button from '@/components/ui/button'

export default function Home() {
  SEO({
    title: 'Netflix Lebanon - Watch TV Shows Online, Watch Movies Online',
    description:
      'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.'
  })

  return (
    <div>
      <Header className="max-w">
        <Link to={'/discover'}>
          <Button>Sign in</Button>
        </Link>
      </Header>
    </div>
  )
}
