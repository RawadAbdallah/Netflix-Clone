import React from 'react'

import './index.css'

type HeaderProps = {
  clasName?: string
  children?: React.ReactNode
}

export default function Index({ clasName, children }: HeaderProps) {
  return (
    <header className={`header ${clasName}`}>
      <div>
        <img src="/logo.png" alt="netflix text logo" className="header-img-logo-text" />
        <img src="/logo-n.png" alt="netflix logo" className="header-img-logo-n" />
      </div>

      <nav className="header-content">{children}</nav>
    </header>
  )
}
