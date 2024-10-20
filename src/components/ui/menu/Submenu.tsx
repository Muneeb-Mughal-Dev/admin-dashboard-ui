import { Fragment } from 'react'
import { SidebarMenu } from '@src/assets/data/sidebar'
import { motion as M } from 'framer-motion'
import { useSidebar } from '@src/hooks'
import {
  Dropdown,
  DropdownButton,
  DropdownDescription,
  DropdownDivider,
  DropdownItem,
  DropdownMenu,
} from '@src/components/ui/dropdown'
import { Icon } from '@src/components/ui/icon'

interface SubmenuProps {
  item: SidebarMenu
}

export const Submenu: React.FC<SubmenuProps> = ({ item }) => {
  const { open, animate } = useSidebar()

  return (
    <Dropdown>
      <DropdownButton size='sm' variant='outline' className='justify-between border-none text-foreground'>
        <div className='group/sidebar flex items-center justify-start gap-2'>
          <Icon name='menu' />
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
            {item.title}
          </M.span>
        </div>
        <Icon name='chevron-right' size={16} />
      </DropdownButton>
      <DropdownMenu className='min-w-80 lg:min-w-64' anchor='bottom'>
        {item.submenu?.map((submenu) => (
          <Fragment key={submenu.id}>
            <DropdownItem to={submenu.path}>
              <span className='truncate text-sm font-semibold'>{submenu.title}</span>
              <DropdownDescription>{submenu.title}</DropdownDescription>
            </DropdownItem>
            <DropdownDivider />
          </Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
