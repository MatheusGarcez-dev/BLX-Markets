import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '@assets/Logo-BLX-V2-PNG.webp'
import { Button } from '../ui/Button'
import { LOGIN_URL, REGISTER_URL } from '../../data/content'
import { prepareNavigation } from '../../lib/scroll'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/account-types', label: 'Account types' },
  { to: '/platform', label: 'Platform' },
  { to: '/pamm', label: 'PAMM' },
  { to: '/about', label: 'About' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const { pathname } = useLocation()
  const [light, setLight] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setLight(document.body.dataset.theme === 'light')
    })
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] })
    setLight(document.body.dataset.theme === 'light')
    return () => observer.disconnect()
  }, [])

  const goTo = (to: string) => {
    if (pathname !== to) {
      prepareNavigation(pathname, to)
    }
    setOpen(false)
  }

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      'relative z-[101] rounded-full px-3 py-1.5 text-[13px] font-medium tracking-wide transition-colors',
      isActive
        ? light
          ? 'bg-black/[0.06] text-[#0f0f10]'
          : 'bg-white/[0.08] text-blx-heading'
        : light
          ? 'text-[#71717a] hover:bg-black/[0.04] hover:text-[#0f0f10]'
          : 'text-blx-text-muted hover:bg-white/[0.04] hover:text-blx-heading',
    ].join(' ')

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[100] border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        light
          ? 'border-black/[0.06] bg-blx-light/80 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.08)] backdrop-blur-xl'
          : 'border-white/[0.06] bg-blx-bg/75 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.4)] backdrop-blur-xl'
      }`}
    >
      <div className="blx-container flex h-16 items-center justify-between lg:h-[4.25rem]">
        <Link to="/" className="relative z-[101] shrink-0" onClick={() => goTo('/')}>
          <img src={logo} alt="BLX Markets" className="h-10 w-auto md:h-11" />
        </Link>

        <nav className="relative z-[101] hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              onClick={() => goTo(item.to)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="relative z-[101] hidden items-center gap-3 lg:flex">
          <Button
            href={LOGIN_URL}
            variant="secondary"
            className={`!px-4 !py-2 !text-[13px] ${
              light
                ? '!border-black/10 !bg-black/[0.03] !text-[#3f3f46] hover:!border-black/15 hover:!bg-black/[0.05]'
                : ''
            }`}
          >
            Log in
          </Button>
          <Button href={REGISTER_URL} variant="primary" className="!px-4 !py-2 !text-[13px]">
            Open account
          </Button>
        </div>

        <button
          type="button"
          className={`relative z-[101] lg:hidden ${light ? 'text-[#0f0f10]' : 'text-blx-heading'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className={`relative z-[101] border-t px-5 py-5 lg:hidden ${light ? 'border-blx-border-light bg-blx-light' : 'border-blx-border bg-blx-bg'}`}
        >
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
                onClick={() => goTo(item.to)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button
              href={LOGIN_URL}
              variant="secondary"
              className={`w-fit !px-4 !py-2 ${light ? '!border-black/10 !bg-black/[0.03] !text-[#3f3f46]' : ''}`}
            >
              Log in
            </Button>
            <Button href={REGISTER_URL} variant="primary" className="w-fit !px-4 !py-2">
              Open account
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
