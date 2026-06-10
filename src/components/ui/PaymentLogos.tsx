import logoMastercard from '@assets/logo-clientes/logo-mastercard.png'
import logoNeteller from '@assets/logo-clientes/logo-neteller.png'
import logoSkrill from '@assets/logo-clientes/logo-skrill.png'
import logoPaytrust from '@assets/logo-clientes/paytust-logo.png'
import logoPerfectMoney from '@assets/logo-clientes/perfect-money-logo.png'
import logoVisa from '@assets/logo-clientes/visa-logo.png'

const logos = [
  { src: logoVisa, alt: 'Visa' },
  { src: logoMastercard, alt: 'Mastercard' },
  { src: logoSkrill, alt: 'Skrill' },
  { src: logoNeteller, alt: 'Neteller' },
  { src: logoPerfectMoney, alt: 'Perfect Money' },
  { src: logoPaytrust, alt: 'Paytrust' },
]

function LogoTrack({ idPrefix }: { idPrefix: string }) {
  return (
    <div className="funding-marquee__track" aria-hidden={idPrefix === 'b'}>
      {logos.map((logo) => (
        <div key={`${idPrefix}-${logo.alt}`} className="funding-marquee__item">
          <img src={logo.src} alt={idPrefix === 'a' ? logo.alt : ''} loading="lazy" draggable={false} />
        </div>
      ))}
    </div>
  )
}

export function PaymentLogos({ light }: { light?: boolean }) {
  return (
    <section className="funding-marquee w-full" aria-label="Funding methods">
      <p
        className={`mb-10 text-center text-[11px] font-medium tracking-[0.18em] uppercase ${
          light ? 'text-[#71717a]' : 'text-blx-text-muted'
        }`}
      >
        Funding methods
      </p>
      <div className="funding-marquee__viewport">
        <div className="funding-marquee__inner">
          <LogoTrack idPrefix="a" />
          <LogoTrack idPrefix="b" />
        </div>
      </div>
    </section>
  )
}
