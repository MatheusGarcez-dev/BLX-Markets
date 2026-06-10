import { Link, type LinkProps, useLocation } from 'react-router-dom'
import { prepareNavigation } from '../../lib/scroll'

function resolvePath(to: LinkProps['to']): string {
  if (typeof to === 'string') return to
  if (typeof to === 'object' && to.pathname) return to.pathname
  return '/'
}

/** Link interno que limpa ScrollTrigger/Lenis antes da troca de rota (evita bug ao sair da Home). */
export function AppLink({ to, onClick, ...props }: LinkProps) {
  const { pathname } = useLocation()
  const target = resolvePath(to)

  return (
    <Link
      to={to}
      onClick={(event) => {
        if (target !== pathname) {
          prepareNavigation(pathname, target)
        }
        onClick?.(event)
      }}
      {...props}
    />
  )
}
