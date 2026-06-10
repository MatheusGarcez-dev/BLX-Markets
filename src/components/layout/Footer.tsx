import logo from '@assets/Logo-BLX-V2-PNG.webp'
import { RiskDisclaimer } from '../legal/RiskDisclaimer'
import { AppLink } from '../ui/AppLink'
import { Button } from '../ui/Button'
import { Reveal, RevealGroup } from '../ui/Reveal'
import { companyLegal, LOGIN_URL, REGISTER_URL, SUPPORT_EMAIL } from '../../data/content'

const exploreLinks = [
  { to: '/', label: 'Home' },
  { to: '/account-types', label: 'Account types' },
  { to: '/platform', label: 'Platform' },
  { to: '/about', label: 'About' },
] as const

const supportLinks = [
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden />

      <div className="blx-container site-footer__main">
        <RevealGroup className="site-footer__brand">
          <Reveal>
            <AppLink to="/" className="inline-block">
              <img src={logo} alt="BLX Markets" className="h-10 w-auto md:h-11" />
            </AppLink>
          </Reveal>
          <Reveal>
            <p className="site-footer__tagline">
              Multi-asset market access with automation-ready infrastructure and a disciplined
              approach to risk.
            </p>
          </Reveal>
          <Reveal className="site-footer__actions">
            <Button href={REGISTER_URL} className="!px-5 !py-2 !text-xs">
              Register
            </Button>
            <Button href={LOGIN_URL} variant="secondary" className="!px-5 !py-2 !text-xs">
              Login
            </Button>
          </Reveal>
        </RevealGroup>

        <RevealGroup className="site-footer__nav" as="nav" aria-label="Footer">
          <Reveal className="site-footer__col">
            <p className="site-footer__label">Explore</p>
            <ul className="site-footer__links">
              {exploreLinks.map(({ to, label }) => (
                <li key={to}>
                  <AppLink to={to} className="site-footer__link">
                    {label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="site-footer__col">
            <p className="site-footer__label">Support</p>
            <ul className="site-footer__links">
              {supportLinks.map(({ to, label }) => (
                <li key={to}>
                  <AppLink to={to} className="site-footer__link">
                    {label}
                  </AppLink>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="site-footer__link site-footer__link--email"
                >
                  {SUPPORT_EMAIL}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal className="site-footer__col site-footer__col--corp">
            <p className="site-footer__label">Corporate</p>
            <p className="site-footer__corp-text">
              {companyLegal.name}
              <br />
              Reg. {companyLegal.reg}
              <br />
              Saint Lucia
            </p>
            <p className="site-footer__risk-hint">
              Margin products involve significant risk. Services are not offered in restricted
              jurisdictions.
            </p>
          </Reveal>
        </RevealGroup>
      </div>

      <div className="blx-container site-footer__legal">
        <Reveal>
          <details className="site-footer__disclosure">
            <summary className="site-footer__disclosure-summary">
              Risk disclosure &amp; regulatory information
            </summary>
            <div className="site-footer__disclosure-body">
              <RiskDisclaimer />
            </div>
          </details>
        </Reveal>
      </div>

      <div className="site-footer__bar">
        <div className="blx-container site-footer__bar-inner">
          <Reveal>
            <p className="site-footer__copy">
              © {year} {companyLegal.name}. All rights reserved.
            </p>
          </Reveal>
          <Reveal>
            <p className="site-footer__bar-meta">MetaTrader 5 · TradingView data</p>
          </Reveal>
        </div>
      </div>
    </footer>
  )
}
