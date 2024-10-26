import { motion as M } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSidebar } from '@src/hooks'
import { Button } from '@src/components/ui/button'
import { Icon, IconProps } from '@src/components/ui/icon'

interface NavLinkProps {
  path: string
  title: string
  icon: IconProps['name']
}

export const NavLink: React.FC<NavLinkProps> = ({ path, title, icon }) => {
  const { open, animate } = useSidebar()
  return (
    <Button
      as={Link}
      size='sm'
      to={path}
      variant='outline'
      className='group/sidebar flex items-center justify-start gap-2 border-none py-2 text-foreground'
    >
      <Icon name={icon} />
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
        className='!m-0 inline-block truncate whitespace-pre !p-0 text-sm font-semibold text-foreground transition duration-150 group-hover/sidebar:translate-x-1'
      >
        {title}
      </M.span>
    </Button>
  )
}
