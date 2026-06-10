import type { SiteFeature } from './siteFeatures'

export const pammIntro = {
  eyebrow: 'PAMM',
  title: 'Professional money management, built in',
  subtitle: 'MT4/MT5 PAMM infrastructure for managers and investors',
  lead: 'BLX deploys an advanced Percent Allocation Management Module—connecting experienced traders who manage capital with investors who allocate to proven strategies, all through a single audited workflow.',
}

export const pammHome = {
  eyebrow: 'PAMM Technology',
  titleBefore: 'Infrastructure built for',
  titleAccent: 'PAMM',
  titleAfter: 'excellence.',
  description:
    'Our platform combines advanced allocation technology with institutional-grade security—so managers and investors operate with confidence across every stage of capital management.',
}

export const pammRoles = [
  {
    tag: 'For Managers',
    title: 'Run capital at scale',
    desc: 'Trade a master account while investor allocations mirror your execution proportionally. Performance fees, reporting, and risk controls are handled inside the PAMM environment.',
    points: [
      'Master account execution',
      'Automated profit allocation',
      'Performance analytics',
      'Risk controls & limits',
    ],
  },
  {
    tag: 'For Investors',
    title: 'Allocate with clarity',
    desc: 'Browse manager profiles, review track records, and allocate capital without operating the terminal yourself. Returns and fees are calculated and distributed automatically.',
    points: [
      'Manager selection',
      'Transparent reporting',
      'Flexible allocation sizes',
      'Automated distributions',
    ],
  },
] as const

export const pammHomeBenefits: SiteFeature[] = [
  {
    icon: 'shield',
    title: 'Institutional security',
    desc: 'Client fund protection, segregation, and encryption built into the allocation workflow.',
  },
  {
    icon: 'chart',
    title: 'Real-time transparency',
    desc: 'Live dashboards and 24/7 reporting for managers, investors, and BLX operations.',
  },
  {
    icon: 'layers',
    title: 'Granular risk management',
    desc: 'Exposure limits, equity protection, and stop mechanisms for pooled capital.',
  },
  {
    icon: 'clock',
    title: 'Built for performance',
    desc: 'High-performance infrastructure engineered for speed, reliability, and scale.',
  },
]

export const pammFeatures: SiteFeature[] = [
  {
    icon: 'layers',
    title: 'Advanced allocation engine',
    desc: 'Proportional lot distribution across investor accounts—every fill on the master account reflected accurately downstream.',
  },
  {
    icon: 'chart',
    title: 'Investment performance tracking',
    desc: 'Live dashboards for managers, investors, and BLX operations—monitor equity curves, drawdown, and fee structures in one place.',
  },
  {
    icon: 'shield',
    title: 'Integrated risk management',
    desc: 'Exposure limits, equity protection, and operational safeguards designed for pooled capital—not retail speculation.',
  },
  {
    icon: 'headset',
    title: 'Onboarding & desk support',
    desc: 'Structured onboarding for managers and investors, with technical support through account setup and platform access.',
  },
]

export const pammHowItWorks = [
  {
    step: '01',
    title: 'Register & verify',
    desc: 'Managers and investors complete BLX onboarding and receive credentials for the PAMM portal and MT5 environment.',
  },
  {
    step: '02',
    title: 'Create or select a PAMM',
    desc: 'Managers set up a master strategy; investors review profiles and allocate capital to the programs that fit their objectives.',
  },
  {
    step: '03',
    title: 'Trade & mirror',
    desc: 'Manager orders execute on the master account. The PAMM engine allocates lots and P&L across linked investor accounts in real time.',
  },
  {
    step: '04',
    title: 'Report & settle',
    desc: 'Performance, fees, and distributions are calculated automatically—both sides access statements through the dashboard.',
  },
] as const

export const pammTechnology = {
  title: 'Powered by TFB PAMM',
  paragraphs: [
    'BLX integrates the Tools for Brokers (TFB) PAMM money management system—a proven MT4/MT5 allocation framework used by brokers and hedge funds worldwide.',
    'The technology handles the complexity of multi-account execution, investor allocation, and reporting so managers focus on strategy and investors focus on selection—not infrastructure.',
    'TFB provides the IT layer; BLX provides client onboarding, account structures, and desk support. Margin products involve significant risk—past performance is not indicative of future results.',
  ],
}

export const pammConclusion =
  'Whether you manage external capital or allocate to professional strategies, BLX PAMM gives both sides institutional-grade tooling on MetaTrader 5. Register to explore manager and investor pathways.'
