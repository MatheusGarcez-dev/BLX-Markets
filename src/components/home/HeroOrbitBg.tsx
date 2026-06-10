/** Anéis orbitais decorativos no fundo da hero — cores BLX */
export function HeroOrbitBg() {
  return (
    <div className="hero-orbit-bg" aria-hidden>
      <div className="hero-orbit-bg__circle">
        <div className="hero-orbit hero-orbit--one">
          <div className="hero-orbit__ring" />
          <div className="hero-orbit__dot" />
        </div>
        <div className="hero-orbit hero-orbit--two">
          <div className="hero-orbit__ring" />
          <div className="hero-orbit__dot" />
        </div>
        <div className="hero-orbit hero-orbit--three">
          <div className="hero-orbit__ring" />
          <div className="hero-orbit__dot" />
        </div>
      </div>
    </div>
  )
}
