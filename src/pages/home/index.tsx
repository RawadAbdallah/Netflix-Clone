import Header from '@/components/header'

import './index.css'

import Button from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <Header className="max-w">
        <Button>Sign in</Button>
      </Header>
    </div>
  )
}
