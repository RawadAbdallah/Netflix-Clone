import './index.css'

import LanguageSelector from '../ui/language-selector'

type Props = {
  className?: string
}

/**
 * `Footer` component for the Netflix website.
 * @param className, is a string used for adding css style classes
 * @returns  Netflix footer.
 */
export default function Footer({ className }: Props) {
  const linksList = [
    { text: 'FAQ', href: 'https://help.netflix.com/support/412' },
    { text: 'Investor Relations', href: 'http://ir.netflix.com/' },
    { text: 'Privacy', href: 'https://help.netflix.com/legal/privacy' },
    { text: 'Speed Test', href: 'https://Fast.com' },
    { text: 'Help', href: 'https://help.netflix.com' },
    { text: 'Jobs', href: 'https://jobs.netflix.com/jobs' },
    { text: 'Cookies Preferences', href: '#' },
    { text: 'Legal Notices', href: 'https://help.netflix.com/legal/notices' },
    {
      text: 'Account',
      href: 'https://www.netflix.com/lb-en/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount'
    },
    { text: 'Ways to Watch', href: 'https://devices.netflix.com/en/' },
    { text: 'Corporate Information', href: 'https://help.netflix.com/legal/corpinfo' },
    {
      text: 'Only on Netflix',
      href: 'https://www.netflix.com/lb-en/browse/genre/839338'
    },
    { text: 'Media Center', href: 'https://media.netflix.com/' },
    { text: 'Terms of Use', href: 'https://help.netflix.com/legal/termsofuse' },
    { text: 'Contact Us', href: 'https://help.netflix.com/contactus' }
  ]

  return (
    <footer className={className}>
      <a className="footer-link">Questions? Contact us.</a>
      <ul className="footer-links-list">
        {linksList.map((link, i) => (
          <li key={i}>
            <a className={'footer-link'} href={link.href}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      <LanguageSelector />

      <p>Netflix Lebanon</p>
    </footer>
  )
}
