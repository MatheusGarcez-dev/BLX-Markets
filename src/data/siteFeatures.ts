import type { IconName } from '../components/ui/BlxIcon'

export type SiteFeature = {
  icon: IconName
  title: string
  desc: string
}

export const trustSignals = [
  { icon: 'globe' as const, label: 'Multi-asset coverage' },
  { icon: 'clock' as const, label: 'Real-time market data' },
  { icon: 'headset' as const, label: '24/7 client desk' },
  { icon: 'shield' as const, label: 'Risk-first infrastructure' },
  { icon: 'lock' as const, label: 'Regulated onboarding' },
] as const

export const whyBlxFeatures: SiteFeature[] = [
  {
    icon: 'chart',
    title: 'Live execution stack',
    desc: 'MetaTrader 5 and TradingView integrated into one workflow—from analysis to order placement.',
  },
  {
    icon: 'layers',
    title: 'Tiered account structures',
    desc: 'From entry-level hedge accounts to exclusive professional tiers aligned to capital and strategy.',
  },
  {
    icon: 'cpu',
    title: 'Automation-ready',
    desc: 'Infrastructure built for systematic operators who need speed, reliability, and repeatable process.',
  },
  {
    icon: 'users',
    title: 'Partnership mindset',
    desc: 'We treat transparency and ongoing support as part of the product—not an afterthought.',
  },
]

export const platformFeatures: SiteFeature[] = [
  {
    icon: 'mobile',
    title: 'Cross-device access',
    desc: 'Desktop, web, and mobile sessions stay in sync so you never lose context.',
  },
  {
    icon: 'chart',
    title: 'Advanced charting',
    desc: 'Indicators, multi-timeframe analysis, and TradingView integration out of the box.',
  },
  {
    icon: 'zap',
    title: 'One-click execution',
    desc: 'Fast order routing with the tooling serious operators expect from a live terminal.',
  },
  {
    icon: 'wallet',
    title: 'Flexible funding',
    desc: 'Multiple deposit routes and account currencies subject to onboarding review.',
  },
]

export const aboutValues: SiteFeature[] = [
  {
    icon: 'shield',
    title: 'Risk governance',
    desc: 'Human judgement and technology combined to access opportunity responsibly.',
  },
  {
    icon: 'globe',
    title: 'Global reach',
    desc: 'Forex, indices, metals, and digital assets through unified infrastructure.',
  },
  {
    icon: 'cpu',
    title: 'Operational automation',
    desc: 'Efficiency where it frees capacity for strategy—not spectacle.',
  },
  {
    icon: 'headset',
    title: 'Client alignment',
    desc: 'Documentation, compliance, and desk support built into every engagement.',
  },
]
