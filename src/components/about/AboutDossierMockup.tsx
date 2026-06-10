import {
  aboutDossierFocus,
  aboutDossierPillars,
  aboutDossierStats,
} from '../../data/aboutDossier'
import { companyLegal } from '../../data/content'

export function AboutDossierMockup() {
  return (
    <div
      className="about-dossier"
      role="img"
      aria-label="BLX Markets company overview: experience, pillars, and corporate focus areas"
    >
      <header className="about-dossier__head">
        <p className="about-dossier__kicker">Company overview</p>
        <p className="about-dossier__brand">BLX Markets</p>
      </header>

      <dl className="about-dossier__stats">
        {aboutDossierStats.map((stat) => (
          <div key={stat.label} className="about-dossier__stat">
            <dt className="about-dossier__stat-label">{stat.label}</dt>
            <dd className="about-dossier__stat-value">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="about-dossier__pillars">
        {aboutDossierPillars.map((pillar) => (
          <li key={pillar.title} className="about-dossier__pillar">
            <span className="about-dossier__pillar-mark" aria-hidden />
            <div>
              <p className="about-dossier__pillar-title">{pillar.title}</p>
              <p className="about-dossier__pillar-desc">{pillar.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="about-dossier__focus">
        <p className="about-dossier__focus-label">What defines us</p>
        <div className="about-dossier__focus-track">
          {aboutDossierFocus.map((item, index) => (
            <span
              key={item.id}
              className={`about-dossier__focus-item ${
                index === 0 ? 'about-dossier__focus-item--active' : ''
              }`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <footer className="about-dossier__foot">
        <p className="about-dossier__corp">{companyLegal.name}</p>
        <p className="about-dossier__reg">Reg. {companyLegal.reg} · Saint Lucia</p>
      </footer>
    </div>
  )
}
