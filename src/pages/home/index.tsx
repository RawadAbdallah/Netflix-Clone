import Header from '@/components/header'

import './index.css'

import { Link } from 'react-router-dom'

import Button from '@/components/ui/button'

export default function Home() {
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
