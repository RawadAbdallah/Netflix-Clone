import React from 'react'

import './index.css'

type HeaderProps = {
  className?: string
  children?: React.ReactNode
}

/**
 * `Header` component returns a header with logo and can take additional props.
 *
 * @param className optional, used to add more styles for the header.
 * @param children optional, used to add render children inside the header.
 *
 * ```tsx
 * import Header from '@/components/header'
 *
 * <Header />
 *
 * // or
 *
 *  <Header>
 *      <Button>JOIN NOW</Button>
 *      <Button variant="secondary">Sign In</Button>
 *  </Header>
 * ```
 */
export default function Index({ className, children }: HeaderProps) {
  return (
    <header className={`header ${className}`}>
      <div>
        <img src="/logo.png" alt="netflix text logo" className="header-img-logo-text" />
        <img src="/logo-n.png" alt="netflix logo" className="header-img-logo-n" />
      </div>

      <nav className="header-content">{children}</nav>
    </header>
  )
}
