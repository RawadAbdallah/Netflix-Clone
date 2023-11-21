import Header from '@/components/header'

import './index.css'

import Button from '@/components/ui/button'

export default function Discover() {
  return (
    <div>
      <Header className="bg-black">
        <p>UNLIMITED TV SHOWS & MOVIES</p>
        <Button>JOIN NOW</Button>
        <Button variant="secondary">SIGN IN</Button>
      </Header>
    </div>
  )
}
