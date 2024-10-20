import { motion as M } from 'framer-motion'
import { Link, LinkProps } from 'react-router-dom'
import { Links } from '@src/contexts/sidebarContext'
import { useSidebar } from '@src/hooks'
import { cn } from '@src/utils/styles'

export const SidebarLink = ({ link, className, ...props }: { link: Links; className?: string; props?: LinkProps }) => {
  const { open, animate } = useSidebar()
  return (
    <Link to={link.href} className={cn('group/sidebar flex items-center justify-start gap-2 py-2', className)} {...props}>
      {link?.icon}

      <M.span
        animate={{
          display:
            animate ?
              open ? 'inline-block'
              : 'none'
            : 'inline-block',
          opacity:
            animate ?
              open ? 1
              : 0
            : 1,
        }}
        className='!m-0 inline-block whitespace-pre !p-0 text-sm text-foreground transition duration-150 group-hover/sidebar:translate-x-1'
      >
        {link.label}
      </M.span>
    </Link>
  )
}
