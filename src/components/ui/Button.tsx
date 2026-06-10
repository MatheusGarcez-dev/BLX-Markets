import { Link } from 'react-router-dom'

import type { ReactNode } from 'react'



type ButtonProps = {

  children: ReactNode

  variant?: 'primary' | 'secondary' | 'ghost'

  href?: string

  to?: string

  className?: string

  type?: 'button' | 'submit'

}



const styles = {

  primary:

    'inline-flex items-center justify-center rounded-full bg-blx-accent px-6 py-2.5 text-sm font-medium text-white shadow-[0_12px_28px_-12px_rgba(203,39,51,0.55)] transition hover:bg-[#b32230] hover:shadow-[0_16px_32px_-12px_rgba(203,39,51,0.5)]',

  secondary:

    'inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm font-medium text-blx-heading backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.06]',

  ghost:

    'inline-flex items-center justify-center rounded-full px-2 py-2 text-sm font-medium text-blx-text-muted transition hover:text-blx-heading',

}



export function Button({

  children,

  variant = 'primary',

  href,

  to,

  className = '',

  type = 'button',

}: ButtonProps) {

  const cls = `${styles[variant]} ${className}`



  if (to) {

    return (

      <Link to={to} className={cls}>

        {children}

      </Link>

    )

  }



  if (href) {

    return (

      <a href={href} className={cls}>

        {children}

      </a>

    )

  }



  return (

    <button type={type} className={cls}>

      {children}

    </button>

  )

}


