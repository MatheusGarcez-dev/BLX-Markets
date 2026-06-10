export type IconName =
  | 'shield'
  | 'chart'
  | 'globe'
  | 'headset'
  | 'mobile'
  | 'cpu'
  | 'wallet'
  | 'clock'
  | 'layers'
  | 'lock'
  | 'zap'
  | 'users'

const paths: Record<IconName, string> = {
  shield:
    'M12 2 4 5v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V5l-8-3z',
  chart: 'M4 19V5M4 19h16M8 17V9m4 8V7m4 10v-4',
  globe:
    'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 0v20M2 12h20M4.5 7h15M4.5 17h15',
  headset:
    'M4 14v-2a8 8 0 0 1 16 0v2M4 14a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2zm16 0a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2zM12 18v3',
  mobile: 'M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm4 16h-4',
  cpu: 'M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2M7 7h10v10H7V7z',
  wallet: 'M3 7h15a2 2 0 0 1 2 2v1H5a2 2 0 0 0 0 4h15v1a2 2 0 0 1-2 2H3V7zm16 6h2v4h-2v-4z',
  clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v5l4 2',
  layers: 'M12 2 2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z',
  lock: 'M7 11V8a5 5 0 0 1 10 0v3M6 11h12v10H6V11z',
  zap: 'M13 2 4 14h7l-1 8 9-12h-7l1-8z',
  users: 'M16 11a4 4 0 1 0-8 0M3 20a7 7 0 0 1 14 0M20 20a5 5 0 0 0-8-4',
}

type BlxIconProps = {
  name: IconName
  className?: string
  size?: number
}

export function BlxIcon({ name, className = '', size = 22 }: BlxIconProps) {
  return (
    <svg
      className={`blx-icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={paths[name]} />
    </svg>
  )
}
